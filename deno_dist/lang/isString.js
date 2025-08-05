
/**
 * 
 * The `isString()` function determines whether an object is a string.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isString(variable) {
    return Object.prototype.toString.call(variable) === '[object String]';
}

export default isString;