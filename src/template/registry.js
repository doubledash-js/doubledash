
/**
 * Global Template Registry for managing tokens, partials, and functions
 */
class Registry {

    defaultTokens = {
        '&': (line, token, statement) => {
            return 'r.push(' + statement + ');' + '\n';
        },
        'if': (line, token, statement) => {
            return 'if ' + statement + '{' + '\n';
        },
        'elseif': (line, token, statement) => {
            return '} else if' + statement + '{' + '\n';
        },
        'else': (line, token, statement) => {
            return '} else {' + '\n';
        },
        'endif': (line, token, statement) => {
            return '}' + '\n';
        },
        'for': (line, token, statement) => {
            return 'for ' + statement + '{' + '\n';
        },
        'endfor': (line, token, statement) => {
            return '}' + '\n';
        },
        'break': (line, token, statement) => {
            return 'break;' + '\n';
        },
        'continue': (line, token, statement) => {
            return 'continue;' + '\n';
        },
        '>': (line, token, statement) => {
            const [name, params] = statement.trim().split(/\s+(.*)/);
            const tpl = this.partials[name];
           
            if (!tpl) {
                throw new SyntaxError(`Partial not found`);
            }

            return 'r.push(_supplant(`' + tpl + '`, ' + params + '));'+ '\n';
            
        },
        'log': (line, token, statement) => {
            console.log(statement);
            return '';
        }
    };

    constructor() {
        this.tokens = { ...this.defaultTokens };
        this.partials = {};
        this.functions = {};
    }

    /**
     * Register a custom token
     * 
     * ```js
     * __.template.registry.registerToken('myToken', (line, token, statement) => {
     *      return 'myCode;' + '\n';
     * });
     * ```
     * 
     * @param {string} name - Token name
     * @param {Object} definition - Token definition with process method
     * @throws {Error} if token name is already registered
     */
    registerToken(name, definition) {
        if (this.tokens[name]) {
            throw new Error(`Token '${name}' is already registered`);
        }
        
        if (!definition || typeof definition !== 'function') {
            throw new Error(`Token definition must be a method`);
        }

        this.tokens[name] = definition ;
    }

    /**
     * Unregister a token
     * 
     * ```js
     * __.template.registry.unregisterToken('myToken');
     * ```
     * 
     * @param {string} name - Token name
     * @throws {Error} if token is not found
     */
    unregisterToken(name) {
        if (!this.tokens[name]) {
            throw new Error(`Token '${name}' not found`);
        }
        delete this.tokens[name];
    }

    /**
     * Register a partial template
     * 
     * ```js
     * __.template.registry.registerPartial('header', '<h1>{{title}}</h1>');
     * ```
     * 
     * @param {string} name - Partial name
     * @param {string|Element} template - Partial template
     * @throws {Error} if partial name is already registered
     */
    registerPartial(name, template) {
        if (this.partials[name]) {
            throw new Error(`Partial '${name}' is already registered`);
        }
        this.partials[name] = template;
    }

    /**
     * Unregister a partial
     * 
     * ```js
     * __.template.registry.unregisterPartial('header');
     * ```
     * 
     * @param {string} name - Partial name
     * @throws {Error} if partial is not found
     */
    unregisterPartial(name) {
        if (!this.partials[name]) {
            throw new Error(`Partial '${name}' not found`);
        }
        delete this.partials[name];
    }

    /**
     * Register a helper function available in templates
     * 
     * ```js
     * __.template.registry.registerFunction('uppercase', (str) => str.toUpperCase());
     * ```
     * 
     * @param {string} name - Function name
     * @param {Function} fn - Function to register
     * @throws {Error} if function name is already registered
     */
    registerFunction(name, fn) {
        if (this.functions[name]) {
            throw new Error(`Function '${name}' is already registered`);
        }
        if (typeof fn !== 'function') {
            throw new Error(`Argument must be a function`);
        }
        this.functions[name] = fn;
    }

    /**
     * Unregister a helper function
     * 
     * ```js
     * __.template.registry.unregisterFunction('uppercase');
     * ```
     * 
     * @param {string} name - Function name
     * @throws {Error} if function is not found
     */
    unregisterFunction(name) {
        if (!this.functions[name]) {
            throw new Error(`Function '${name}' not found`);
        }
        delete this.functions[name];
    }

    /**
     * Get all registered tokens
     * @returns {Object}
     */
    getTokens() {
        return { ...this.tokens };
    }

    /**
     * Get all registered partials
     * @returns {Object}
     */
    getPartials() {
        return { ...this.partials };
    }

    /**
     * Get all registered functions
     * @returns {Object}
     */
    getFunctions() {
        return { ...this.functions };
    }

    /**
     * Reset all registrations to defaults
     */
    reset() {
        this.tokens = { ...settings.tokens };
        this.partials = {};
        this.functions = {};
    }
}


// Export a singleton instance
export default new Registry();
