/**
 * The `offset()` function gets the current coordinates of the element relative to the document.
 * 
 * ```js
 * __.location.offset(element);
 * ```
 * 
 * @param {Element} element 
 * @returns {Object}
 */	
function offset(element) {
    let rect = element.getBoundingClientRect();

    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

export default offset;
