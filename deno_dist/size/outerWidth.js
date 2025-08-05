
/**
 * The `outerWidth()` function returns the outer width of the element. Includes margins if includeMargings is set to true. returns the width of the element.
 * (element + padding + border) OR (element + padding + border + margin)
 * 
 * ```js
 * __.size.outerWidth(element, includeMargins);
 * ```
 * 
 * @param {Element} element 
 * @param {boolean} includeMargins
 * @returns {int}
 */	
function outerWidth(element, includeMargins) {
    if (includeMargins && includeMargins === true) {
        let width = element.offsetWidth;
        let style = getComputedStyle(element);
      
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    }
    
    return element.offsetWidth;
}

export default outerWidth;
