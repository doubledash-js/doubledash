import animate from './animate';

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

    let animation = 'slideIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);
    else
        animation = animation + 'Down'

    return animate(element, animation, options);
}
    
export default slideIn;