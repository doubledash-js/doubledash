/**
 * The `outerHeight()` function returns the outer height of the element. Includes margins if includeMargings is set to true. returns the height of the element.
 * (element + padding + border) OR (element + padding + border + margin)
 * 
 * ```js
 * __.size.outerHeight(element, includeMargins);
 * ```
 * 
 * @param {Element} element 
 * @param {boolean} includeMargins
 * @returns {int}
 */	
function outerHeight(element, includeMargins) {
    if (includeMargins && includeMargins === true) {
        let height = element.offsetHeight;
        let style = getComputedStyle(element);
    
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
    }

    return element.offsetHeight;
}

export default outerHeight;
