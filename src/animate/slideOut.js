import animation from './animation';

/**
 * 
 * The `slideOut()` function slides out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.slideOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function slideOut(element, options) {
    options = options ? options : {};

    let animationType = 'slideOut';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animationType = animationType + 'Down'

    return animation(element, animationType, options);
}
    
export default slideOut;