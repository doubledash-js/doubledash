
/**
 * 
 * The `empty()` function removes all child nodes and content from the specified `element`.
 * 
 * ```js
 * __.dom.empty(element);
 * ```
 * 
 * @param {Element} element
 */
function empty(element) {
    while(element.firstChild)
        element.removeChild(element.firstChild);
}
    
export default empty;