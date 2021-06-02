import isUndefined from './isUndefined';
import isNull from './isNull';
import isString from './isString';
import isArray from './isArray';
import isObject from './isObject';

/**
 * 
 * The `isEmpty()` function determines whether an object is empty.
 * 
 * Empty means undefined, null, NaN, 0, false, '', [], {}
 * 
 * @param {*} variable 
 * @returns {boolean}
 */
function isEmpty(variable) {
    return isUndefined(variable) || isNull(variable) || Number.isNaN(variable) || variable === 0 || variable === false || ((isString(variable) || isArray(variable)) && variable.length === 0) || (isObject(variable) && Object.getOwnPropertyNames(variable).length === 0);
}

export default isEmpty;