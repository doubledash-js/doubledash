
/**
 * 
 * The `index()` function returns the index position of the specified `element` relative to the element siblings.
 * 
 * ```js
 * __.dom.index(element);
 * ```
 * 
 * @param {Element} element
 * @returns {number}
 */
function index(element) {
    if (!element)
        return -1;

    let i = 0;
    do {
        i++;
    } while (element = element.previousElementSibling);
    
    return i-1;
}

export default index;
