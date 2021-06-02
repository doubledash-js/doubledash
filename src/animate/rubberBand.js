import animate from './animate';

/**
 * 
 * The `rubberBand()` function give a rubberBand like effect of the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.rubberBand(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function rubberBand(element, options) {
    options = options ? options : {};

    return animate(element, 'rubberBand', options);
}
    
export default rubberBand;