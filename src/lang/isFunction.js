
/**
 * 
 * The `isFunction()` function determines whether an object is function.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isFunction(variable) {
    return Object.prototype.toString.call(variable) === '[object Function]';
}

export default isFunction;