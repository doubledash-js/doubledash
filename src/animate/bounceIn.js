import animation from '../animate/animation';

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
function bounceIn(element, options) {
    options = options ? options : {};

    let animationType = 'bounceIn';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default bounceIn;