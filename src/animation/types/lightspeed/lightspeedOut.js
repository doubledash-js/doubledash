import animate from '../../animate';

/**
 * 
 * The `lightspeedOut()` function moves out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.lightspeedOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: right|left, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function lightspeedOut(element, options = {}) {
    return animate(element, 'lightspeedOut', options);
}
    
export default lightspeedOut;