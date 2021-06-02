
/**
 * 
 * The `isJson()` function determines whether an object is a JSON.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isJson(variable) {
    try {
        JSON.parse(variable);
    } catch (e) {
        return false;
    }
    return true;
}

export default isJson;