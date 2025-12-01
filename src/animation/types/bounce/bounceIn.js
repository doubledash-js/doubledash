import animate from '../../animate';

/**
 * 
 * The `bounceIn()` function bounces in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.bounceIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function bounceIn(element, options = {}) {
    return animate(element, 'bounceIn', options);
}
    
export default bounceIn;