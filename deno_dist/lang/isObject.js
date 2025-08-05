/**
 * 
 * The `isObject()` function determines whether an object is a object.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isObject(variable) {
    return Object.prototype.toString.call(variable) === '[object Object]';
}

export default isObject;