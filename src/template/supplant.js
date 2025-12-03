import registry from './registry';
import escapeHtml from '../lang/escapeHtml';

/**
 * Populates a template with a object
 * 
 * ```js
 * __.template.supplant(template, params);
 * ```
 * 
 * @param {string|Element} template 
 * @param {Object} params 
 * @returns 
 */
function supplant(template, params) {
    template = (template && template.nodeType === Node.ELEMENT_NODE) ? template.innerHTML : template;
    params = params ? params : {};

    const re = /{{([\s\S]*?)}}/g;

    const tokenNames = Object.keys(registry.getTokens())
        .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // escape for RegExp
        .join('|');

    const tokenStartRe = new RegExp('^\\s*(' + tokenNames + ')(?=\\s|$)');

    let code = 'var r=[];\n',
        cursor = 0,
        match;

    function addText(text) {
        if (!text) return;
        code += 'r.push("' + text.replace(/"/g, '\\"') + '");\n';
    }

    function addToken(raw) {
        const line = raw.trim();

        // Check if the token body starts with one of our control tokens
        const m = tokenStartRe.exec(line);

        if (m) {
            const token = m[1];                        // e.g. "part"
            const statement = line.slice(m[0].length)  // everything after the token
                                 .trim();              // e.g. "(cardTemplate, { partarg1: arg1, ... })"

            const tokenDef = registry.getTokens()[token];
            if (!tokenDef) {
                throw new SyntaxError(`Token not found '${token}'`);
            }

            code += tokenDef(line, token, statement);
        } else {
            // Not a control token -> plain expression: {{ someJsExpression }}
            code += 'r.push(_escape(' + line + '));\n';
        }
    }

    while ((match = re.exec(template))) {
        addText(template.slice(cursor, match.index)); // literal text
        addToken(match[1]);                           // token body
        cursor = match.index + match[0].length;
    }

    addText(template.slice(cursor));

    // Attach helpers function to params
    params._escape   = escapeHtml;
    params._supplant = supplant;
    
    // Attach registered functions to params
    const registeredFunctions = registry.getFunctions();
    Object.keys(registeredFunctions).forEach(name => {
        params[name] = registeredFunctions[name];
    });

    code += 'return r.join("");';

    return new Function('with (this) { ' + code.replace(/[\r\t\n]/g, '') + '}').apply(params);
}

export default supplant;