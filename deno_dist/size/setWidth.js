import isFunction from '../lang/isFunction/index.ts';
import isString from '../lang/isString/index.ts';

/**
 * The `setWidth()` function sets the width of the element.
 * 
 * ```js
 * __.size.setWidth(element, value);
 * ```
 * 
 * @param {Element} element 
 * @param {number|string|function} value
 */	
function setWidth(element, value) {
    if (isFunction(value)) 
        value = value();

    if (isString(value)) 
        element.style.width = value;
    else 
        element.style.width = value + 'px';
}

export default setWidth;