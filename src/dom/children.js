import isUndefined from '../lang/isUndefined';

/**
 * 
 * The `children()` function returns all direct children of the specified `element`. Optional a `selector` can be added to narrow down your returned results.
 * 
 * ```js
 * __.dom.children(element, selector);
 * ```
 * 
 * @param {Element} element
 * @param {string} [selector=undefined]
 * @returns {array}
 */
function children(element, selector) {
    if (isUndefined(selector)) {
        return [].concat(...element.children);
    }

    return [].concat(...element.children).filter(child => child.matches(selector))
}

export default children;