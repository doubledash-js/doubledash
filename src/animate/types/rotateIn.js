import animation from '../animate';

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

    return animation(element, 'rotateIn', options);
}
    
export default rotateIn;