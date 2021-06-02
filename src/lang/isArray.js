
/**
 * 
 * The `isArray()` function determines whether an object is an array.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isArray(variable) {
    return Object.prototype.toString.call(variable) === '[object Array]';
}

export default isArray;