import animation from '../animate';

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

    return animation(element, 'slideOut', options);
}
    
export default slideOut;