
/**
 * 
 * The `find()` function allow you to select and manipulate HTML elements. Optional element to start your search on, by default it uses the entire document. 
 * 
 * Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.
 * 
 * ```js
 * __.dom.find(selector, element);
 * ```
 * 
 * @param {string} selector
 * @param {Element} [element=document.documentElement]
 * @returns {array}
 */
function find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
}

export default find;