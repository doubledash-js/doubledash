import animation from '../animate/animation/index.ts';

/**
 * 
 * The `swings()` function swings the specified `element` for attention.
 * 
* The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.swing(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function swing(element, options) {
    options = options ? options : {};

    return animation(element, 'swing', options);
}
    
export default swing;