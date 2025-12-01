import animate from '../../animate';

/**
 * 
 * The `flip()` function flips a specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.flip(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function flip(element, options = {}) {
    return animate(element, 'flip', options);
}
    
export default flip;