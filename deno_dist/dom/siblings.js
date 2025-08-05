
/**
 * The `siblings()` function returns all sibling elements of the specified `element`.
 * 
 * Sibling elements are elements that share the same parent.
 * 
 * ```js
 * __.dom.siblings(element);
 * ```
 * 
 * @param {Element} element
 * @returns {array}
 */
function siblings(element) {
    return [].concat(...element.parentNode.children).filter(child => child !== element)
}

export default siblings;