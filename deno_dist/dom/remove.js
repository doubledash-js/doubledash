
/**
 * The `remove()` function removes the specified `element` and its child elements.
 * 
 * ```js
 * __.dom.remove(element);
 * ```
 * 
 * @param {Element} element
 */
function remove(element) {
    element.parentNode.removeChild(element);
}

export default remove;