import animation from './animation';

/**
 * 
 * The `bounceOut()` function bounces out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.bounceOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function bounceOut(element, options) {
    options = options ? options : {};

    let animationType = 'bounceOut';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default bounceOut;