import isString from '../lang/isString';

/**
 * 
 * The `closest()` function returns the closest matching selector up the DOM tree.
 * 
 * ```js
 * __.dom.closest(element, selector);
 * ```
 * 
 * @param {Element} element
 * @param {string|Element} selector
 * @returns {Element|boolean}
 */
function closest(element, selector) {
    const NODE_TEXT = 3
    
    let isSelector = isString(selector);
    let ancestor = element.parentNode
    
    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
    
        if (!isSelector) {
            if (ancestor == selector) {
                return ancestor;
            }
        } else if (ancestor.matches(selector)) {
            return ancestor;
        }
        
        ancestor = ancestor.parentNode;
    }
    
    return false;
}

export default closest;