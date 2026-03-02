import animate from '../../animate';

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
 * @param {object} [options={ distance: 1000px, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function revealIn(element, options = {}) {
    return animate(element, 'revealIn', options);
}
    
export default revealIn;