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
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    };
}

export default offset;
