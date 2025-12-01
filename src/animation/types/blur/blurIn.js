import animate from '../../animate';

/**
 * 
 * The `blurIn()` function appears with a blur effect on the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.blurIn(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
export default function blurIn(element, options = {}) {
    return animate(element, 'blurIn', options);
}
