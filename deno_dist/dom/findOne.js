
/**
 * 
 * The `findOne()` function is similar to `find()` but will only return a single element. Optional element to start your search on, by default it uses the entire document. 
 * 
 * Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.
 * 
 * ```js
 * __.dom.findOne(selector, element);
 * ```
 * 
 * @param {string} selector 
 * @param {Element} [element=document.documentElement]
 * @returns {Element}
 */
function findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector)
}

export default findOne;