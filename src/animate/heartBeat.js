import animate from './animate';

/**
 * 
 * The `heartBeat()` function pulses like a heartBeat the specified `element` for attention.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.heartBeat(element, options);
 * ```
 * 
 * @param {Element} element
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }]
 * @returns {Promise}
 */
function heartBeat(element, options) {
    options = options ? options : {};

    return animate(element, 'heartBeat', options);
}
    
export default heartBeat;