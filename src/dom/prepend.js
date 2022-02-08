import isString from '../lang/isString';

/**
 * 
 * The `prepend()` function inserts the specified `element` at the beginning of the specified `target`.
 * 
 * ```js
 * __.dom.prepend(element, target);
 * ```
 * 
 * @param {Element} element
 * @param {Element} target
 * @returns {Element}
 */
function prepend(element, target) {
    if (isString(element)) {
        target.insertAdjacentHTML('afterbegin', element.trim());
        return target.firstElementChild;
    }

    return target.insertBefore(element, target.firstChild);
}
    
export default prepend;