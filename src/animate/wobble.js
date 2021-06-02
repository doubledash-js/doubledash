import animate from './animate';

/**
 * 
 * The `wobble()` function wobbles the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.wobble(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function wobble(element, options) {
    options = options ? options : {};

    return animate(element, 'wobble', options);
}
    
export default wobble;