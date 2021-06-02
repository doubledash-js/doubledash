
/**
 * 
 * The `isUndefined()` function determines whether an object is undefined.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isUndefined(variable) {
    return Object.prototype.toString.call(variable) === '[object Undefined]';
}

export default isUndefined;