/**
 * 
 * The `after()` function inserts the specified `element` after the specified `target`.
 * 
 * ```js
 * __.dom.after(element, target);
 * ```
 * 
 * @param {Element} element
 * @param {Element} target
 * @returns {Element}
 */
function after(element, target) {
    return target.insertAdjacentElement('afterend', element);
}
    
export default after;