import isUndefined from './isUndefined';
import isNull from './isNull';

/**
 * 
 * The `isSet()` function determines whether an object is undefined or null.
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isSet(variable) {
    return !isUndefined(variable) && !isNull(variable);
}

export default isSet;