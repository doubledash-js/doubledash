import animate from '../../animate';

/**
 * 
 * The `flipOut()` function flips out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.flipOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: x|y, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function flipOut(element, options = {}) {
    return animate(element, 'flipOut', options);
}
    
export default flipOut;