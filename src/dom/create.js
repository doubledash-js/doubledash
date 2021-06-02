import isArray from '../lang/isArray';

/**
 * 
 * The `create()` function creates the HTML element specified by the `tag`. Optional `attributes` and `text` can be added.
 * 
 * ```js
 * __.dom.create(tag, attributes, text);
 * ```
 * 
 * @param {string} tag
 * @param {Object} [attributes={}]
 * @param {string} [text=undefined]
 * @returns {Element}
 */
function create(tag, attributes, text) {
    const element = document.createElement(tag);

    for (const key in attributes) {
        let val = attributes[key];
        if (key === 'class') {
            if (isArray(val)) {
                element.classList.add(...val);
            } else {
                element.classList.add(val);
            }
        } else {
            element.setAttribute(key, val);
        }
    }

    if (text) {
        element.innerHTML = text;
    }

    return element;
}

export default create;