import animate from '../../animate';

/**
 * 
 * The `bounceOut()` function bounces out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.bounceOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function bounceOut(element, options = {}) {
    return animate(element, 'bounceOut', options);
}
    
export default bounceOut;