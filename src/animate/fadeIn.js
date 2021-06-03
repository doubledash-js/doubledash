import animation from './animation';

/**
 * 
 * The `fadeIn()` function fades in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.fadeIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function fadeIn(element, options) {
    options = options ? options : {};

    let animation = 'fadeIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animation, options);
}
    
export default fadeIn;