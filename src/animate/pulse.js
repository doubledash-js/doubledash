import animate from './animate';

/**
 * 
 * The `pulse()` function pulses the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.pulse(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function pulse(element, options) {
    options = options ? options : {};

    return animate(element, 'pulse', options);
}
    
export default pulse;