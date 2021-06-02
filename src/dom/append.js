/**
 * 
 * The `append()` function inserts the specified `element` at the end of the specified `target`.
 *  
 * ```js
 * __.dom.after(element, target);
 * ```
 * 
 * @param {Element} element
 * @param {Element} target
 * @returns {Element}
 */
function append(element, target) {
    return target.appendChild(element);
}
    
export default append;