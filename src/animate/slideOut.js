import animate from './animate';

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

    let animation = 'slideOut';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animation = animation + 'Down'

    return animate(element, animation, options);
}
    
export default slideOut;