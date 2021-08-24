/**
 * 
 * The `show()` function sets the specified `element` display to ''.
 * 
 * ```js
 * __.dom.show(element, display);
 * ```
 * 
 * @param {Element} element
 * @param {string} display
 */
 function show(element, display) {
    display = display ? display : '';
    element.style.display = display;
}
    
export default show;
