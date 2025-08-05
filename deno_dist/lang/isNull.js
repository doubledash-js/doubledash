
/**
 * 
 * The `isNull()` function determines whether an object is null.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isNull(variable) {
    return Object.prototype.toString.call(variable) === '[object Null]';
}
    
export default isNull;