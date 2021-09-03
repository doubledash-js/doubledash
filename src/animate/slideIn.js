import animation from './animation';

/**
 * 
 * The `slideIn()` function slides in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.slideIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function slideIn(element, options) {
    options = options ? options : {};

    let animationType = 'slideIn';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animationType = animationType + 'Down'

    return animation(element, animationType, options);
}
    
export default slideIn;