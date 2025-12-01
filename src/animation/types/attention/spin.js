import animate from '../../animate';

/**
 * 
 * The `spin()` function spins the specified `element` for attention.
 * 
* The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.spin(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function spin(element, options = {}) {
    return animate(element, 'spin', options);
}
    
export default spin;