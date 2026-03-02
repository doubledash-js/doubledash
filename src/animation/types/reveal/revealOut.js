import animate from '../../animate';

/**
 * 
 * The `revealOut()` function hides the specified `element` like an accordion collapsing. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.revealOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ distance: 1000px, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function revealOut(element, options = {}) {
    return animate(element, 'revealOut', options);
}
    
export default revealOut;