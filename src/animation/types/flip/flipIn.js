import animate from '../../animate';

/**
 * 
 * The `flipIn()` function flips in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.flipIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: x|y, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function flipIn(element, options = {}) {
    return animate(element, 'flipIn', options);
}
    
export default flipIn;