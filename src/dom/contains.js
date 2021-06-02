import isString from '../lang/isString';

/**
 * 
 * @param {Element} element
 * @param {string|Element} child
 * @returns {boolean}
 */
function contains(element, child) {
    if (isString(child)) {
        return !!element.querySelector(child);
    } 

    return element !== child && element.contains(child);
}
    
export default contains;