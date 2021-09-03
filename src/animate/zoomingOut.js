import animation from './animation';

/**
 * 
 * The `zoomingOut()` function zooms out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.zoomingOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: up|down|left|right, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function zoomingOut(element, options) {
    options = options ? options : {};

    let animationType = 'zoomingOut';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default zoomingOut;