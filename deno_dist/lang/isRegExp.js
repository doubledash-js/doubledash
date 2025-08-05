/**
 * 
 * The `isRegExp()` function determines whether an object is a regular expression.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isRegExp(variable) {
    return Object.prototype.toString.call(variable) === '[object RegExp]';
}

export default isRegExp;