import isUndefined from './isUndefined/index.ts';
import isNull from './isNull/index.ts';

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