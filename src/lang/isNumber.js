/**
 * 
 * The `isNumber()` function determines whether an object is a number.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isNumber(variable) {
    return Object.prototype.toString.call(variable) === '[object Number]';
}

export default isNumber;