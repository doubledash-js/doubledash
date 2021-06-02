import settings from './settings';
import escapeHtml from '../lang/escapeHtml';

/**
 * 
 * @param {string} template 
 * @param {Object} json 
 * @returns 
 */
function compile(template, json) {
    if (template && template.nodeType === Node.ELEMENT_NODE) {
        template = template.innerHTML;
    }

    let re = /{{([^{{}}]*)}}/g,
        reExp = new RegExp('(^( )?(' + Object.keys(settings.tokens).join('|') + '))(.*)?', 'g'),
        code = 'var r=[];\n',
        cursor = 0,
        match;

    let add = (line, js) => {
        if (js) {
            
            if (line.match(reExp)) {

                let [token, statement] = match[1].split(/ (.+)/);

                if (settings.tokens.hasOwnProperty(token)) {
                    let tokenDef = settings.tokens[token];
                    code += tokenDef.process(line, token, statement);
                } else {
                    throw new SyntaxError(`Token not found '${token}'`);
                }
                
            } else {
                code += 'r.push(_escape(' + line + '));\n';
            }
        } else {
            code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
        }

        return add;
    }

    while (match = re.exec(template)) {
        add(template.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }

    add(template.substr(cursor, template.length - cursor));

    // Attach exscape function to json
    json._escape = escapeHtml;

    code += 'return r.join("");';
    return new Function(' with (this) { ' + code.replace(/[\r\t\n]/g, '') + '}').apply(json);

}

export default compile;