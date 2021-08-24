/**
 * 
 * The `toggle()` function display or hide the element.
 * 
 * ```js
 * __.dom.toggle(element, display);
 * ```
 * 
 * @param {Element} element
 * @param {string} display
 */
 function toggle(element, display) {
    if (element.ownerDocument.defaultView.getComputedStyle(element, null).display === 'none') {
        display = display ? display : '';
        element.style.display = display;
    } else {
        element.style.display = 'none';
    }
}
    
export default toggle;
