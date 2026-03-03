import animate from '../../animate';

function getRevealDistance(element, providedDistance) {
    if (providedDistance) {
        return providedDistance;
    }

    const height = element.scrollHeight || element.offsetHeight || 0;
    return `${height}px`;
}

/**
 * 
 * The `revealOut()` function hides the specified `element` like an accordion collapsing. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.revealOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 280ms, easing: ease-in, distance: auto, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function revealOut(element, options = {}) {
    return animate(element, 'revealOut', {
        ...options,
        distance: getRevealDistance(element, options.distance)
    });
}
    
export default revealOut;