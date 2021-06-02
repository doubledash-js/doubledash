
/**
 * 
 * The `clone()` function makes a copy of the specified `element`, including child nodes, text and attributes.
 * 
 * ```js
 * __.dom.clone(element);
 * ```
 * 
 * @param {Element} element
 * @returns {Element}
 */
function clone(element) {
    return element.cloneNode(true);
}
    
export default clone;