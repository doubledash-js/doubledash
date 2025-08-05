import animation from '../animate/animation/index.ts';

/**
 * 
 * The `rotateIn()` function rotates in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.rotateIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: downLeft|downRight|upLeft|upLeft, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function rotateIn(element, options) {
    options = options ? options : {};

    let animationType = 'rotateIn';
    if (options.direction)
        animationType = animationType + options.direction.charAt(0).toUpperCase() + options.direction.slice(1);

    return animation(element, animationType, options);
}
    
export default rotateIn;