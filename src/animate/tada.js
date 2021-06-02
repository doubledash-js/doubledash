import animate from './animate';

/**
 * 
 * The `tada()` function gives a magic like effect of the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.tada(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function tada(element, options) {
    options = options ? options : {};

    return animate(element, 'tada', options);
}
    
export default tada;