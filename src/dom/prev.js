import isUndefined from '../lang/isUndefined';

/**
 * 
 * The `prev()` function returns the previous sibling element of the specified `element`.  Optionally a `selector` can be added to be more specific. 
 * 
 * Sibling elements are elements that share the same parent.
 * 
 * ```js
 * __.dom.prev(element, selector);
 * ```
 * 
 * @param {Element} element
 * @param {string} [selector=undefined]
 * @returns {Element}
 */
function prev(element, selector) {
    let previous = element.previousElementSibling;

    if (isUndefined(selector)) {
        return previous;
    }

    while (previous) {
      if (previous.matches(selector)) {
        return previous;
      }

      previous = previous.previousElementSibling;
    }

    return undefined;
}

export default prev;