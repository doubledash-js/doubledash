import animate from '../../animate';

/**
 * 
 * The `headShake()` function pulses like a headShake the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.headShake(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function headShake(element, options = {}) {
    return animate(element, 'headShake', options);
}
    
export default headShake;