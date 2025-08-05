
import supplant from './supplant/index.ts';

/**
 * Alias of supplant
 * 
 * ```js
 * __.template.compile(template, json);
 * ```
 * 
 * @param {string|Element} template 
 * @param {Object} json 
 * @returns 
 */
function compile(template, json) {
    return supplant(template, json);
}

export default compile;