import animate from './animate';

/**
 * 
 * The `shake()` function shakes the specified `element` for attention.
 * 
* The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.shake(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function shake(element, options) {
    options = options ? options : {};

    return animate(element, 'shake', options);
}
    
export default shake;