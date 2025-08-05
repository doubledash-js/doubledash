
/**
 * 
 * The `isBoolean()` function determines whether an object is an boolean.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isBoolean(variable) {
    return Object.prototype.toString.call(variable) === '[object Boolean]';
}

export default isBoolean;
