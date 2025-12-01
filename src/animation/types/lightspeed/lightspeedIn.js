import animate from '../../animate';

/**
 * 
 * The `lightspeedIn()` function moves in the specified `element`. This function shows hidden elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.lightspeedIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: right|left, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function lightspeedIn(element, options = {}) {
    return animate(element, 'lightspeedIn', options);
}
    
export default lightspeedIn;