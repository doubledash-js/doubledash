import animate from './animate';

/**
 * 
 * The `flash()` function flashes the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.flash(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function flash(element, options) {
    options = options ? options : {};

    return animate(element, 'flash', options);
}
    
export default flash;