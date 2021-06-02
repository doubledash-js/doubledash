import isUndefined from '../lang/isUndefined';

const NODE_TEXT = 3

/**
 * 
 * The `parents()` function returns all ancestor elements of the specified `element`. Optionally add a `selector` to match elements against.
 * 
 * An ancestor is a parent, grandparent, great-grandparent, and so on. 
 * 
 * ```js
 * __.dom.parents(element, selector);
 * ```
 * 
 * @param {Element} element
 * @param {string} [selector=undefined]
 * @returns {array}
 */
function parents(element, selector) {
    const parents = []

    let noSelector = isUndefined(selector);

    let ancestor = element.parentNode

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (noSelector) {
            parents.push(ancestor)
        } else if (ancestor.matches(selector)) {
            parents.push(ancestor)
        }

        ancestor = ancestor.parentNode
    }

    return parents
}

export default parents;