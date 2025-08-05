import isFunction from '../lang/isFunction/index.ts';
import isString from '../lang/isString/index.ts';

/**
 * The `setHeight()` function sets the height of the element.
 * 
 * ```js
 * __.size.setHeight(element, value);
 * ```
 * 
 * @param {Element} element 
 * @param {number|string|function} value
 */	
function setHeight(element, value) {
    if (isFunction(value)) 
        value = value();

    if (isString(value)) 
        element.style.height = value;
    else
        element.style.height = value + 'px';
}

export default setHeight;