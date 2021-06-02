import animate from './animate';

/**
 * 
 * The `zoomingIn()` function zooms in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.zoomingIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function zoomingIn(element, options) {
    options = options ? options : {};

    let animation = 'zoomingIn';
    if (options.direction)
        animation = animation + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animate(element, animation, options);
}
    
export default zoomingIn;