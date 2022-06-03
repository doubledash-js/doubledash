import animation from '../animate/animation';

/**
 * 
 * The `rotateOut()` function rotates out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.rotateOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function rotateOut(element, options) {
    options = options ? options : {};

    let animationType = 'rotateOut';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default rotateOut;