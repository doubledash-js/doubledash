import animation from '../animate/animation';

/**
 * 
 * The `fadeOut()` function fades out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.fadeOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function fadeOut(element, options) {
    options = options ? options : {};

    let animationType = 'fadeOut';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default fadeOut;