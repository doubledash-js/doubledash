
/**
 * The `width()` function returns the width of the element.
 * (element + padding)
 * 
 * ```js
 * __.size.width(element);
 * ```
 * 
 * @param {Element} element 
 * @returns {int}
 */	
function width(element) {
    return element.clientWidth;
}

export default width;
