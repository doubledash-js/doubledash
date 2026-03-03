import animate from '../../animate';

function getRevealDistance(element, providedDistance) {
    if (providedDistance) {
        return providedDistance;
    }

    const previousDisplay = element.style.display;

    if (window.getComputedStyle(element).display === 'none') {
        element.style.display = '';
    }

    const height = element.scrollHeight;
    element.style.display = previousDisplay;

    return `${height || 0}px`;
}

/**
 * 
 * The `revealIn()` function reveals the specified `element` like an accordion opening. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.revealIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 280ms, easing: ease-out, distance: auto, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function revealIn(element, options = {}) {
    return animate(element, 'revealIn', {
        ...options,
        distance: getRevealDistance(element, options.distance)
    });
}
    
export default revealIn;