import animate from './animate';

/**
 * 
 * The `bounce()` function bounces the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.bounce(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function bounce(element, options) {
    options = options ? options : {};
    
    return animate(element, 'bounce', options);
}
    
export default bounce;