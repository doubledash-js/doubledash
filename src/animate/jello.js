import animation from '../animate/animation';

/**
 * 
 * The `jello()` function give a jello like effect of the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.jello(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function jello(element, options) {
    options = options ? options : {};

    return animation(element, 'jello', options);
}
    
export default jello;