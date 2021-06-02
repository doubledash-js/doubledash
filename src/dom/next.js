import isUndefined from '../lang/isUndefined';

/**
 * 
 * The `next()` function returns the next sibling element of the specified `element`. Optionally a `selector` can be added to be more specific. 
 * 
 * Sibling elements are elements that share the same parent.
 * 
 * ```js
 * __.dom.next(element, selector);
 * ```
 * 
 * @param {Element} element 
 * @param {string} [selector=undefined]
 * @returns {Element}
 */
function next(element, selector) {
    let next = element.nextElementSibling;

    if (isUndefined(selector)) {
        return next;
    }

    while (next) {
        if (next.matches(selector)) {
            return next;
        }

        next = next.nextElementSibling;
    }

    return undefined;
}

export default next;