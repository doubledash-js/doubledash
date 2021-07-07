import compile from './compile';

/**
 * 
 * @param {string} template 
 * @param {Object} json 
 * @returns 
 */
function supplant(template, json) {
    return compile(template, json);

}

export default supplant;