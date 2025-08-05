/**
 * The `position()` function gets the current coordinates of the element relative to the offset parent.
 * 
 * ```js
 * __.location.position(element, relativeToViewport);
 * ```
 * 
 * @param {Element} element 
 * @param {boolean} relativeToViewport
 * @returns {Object}
 */	
function position(element, relativeToViewport) {

    if (relativeToViewport && relativeToViewport === true) {
        return element.getBoundingClientRect();
    }

    return {
        left: element.offsetLeft,
        top: element.offsetTop
    };
}

export default position;
