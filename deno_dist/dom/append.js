import isString from '../lang/isString/index.ts';

/**
 * 
 * The `append()` function inserts the specified `element` at the end of the specified `target`.
 *  
 * ```js
 * __.dom.after(element, target);
 * ```
 * 
 * @param {Element} element
 * @param {Element} target
 * @returns {Element}
 */
function append(element, target) {
    if (isString(element)) {
        target.insertAdjacentHTML('beforeend', element.trim());
        return target.lastElementChild;
    }
    
    return target.appendChild(element);
}
    
export default append;
