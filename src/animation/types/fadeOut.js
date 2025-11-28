import animation from '../animate';

/**
 * 
 * The `fadeOut()` function fades out the specified `element`. This function hides visible elements as a result.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.fadeOut(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ direction: down|left|right|up|bottomLeft|bottomRight|topLeft|topLeft, duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
 function fadeOut(element, options) {
    options = options ? options : {};

    return animation(element, 'fadeOut', options);
}
    
export default fadeOut;