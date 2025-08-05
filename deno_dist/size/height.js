
/**
 * The `height()` function returns the height of the element.
 * (element + padding)
 * 
 * ```js
 * __.size.height(element);
 * ```
 * 
 * @param {Element} element 
 * @returns {int}
 */	
function height(element) {
    return element.clientHeight;
}

export default height;
