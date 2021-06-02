import { removeHandler } from './helpers';

/**
 * Remove an event listener. All three arguments must be identical to the ones used when setting up the listener.
 * 
 * @param {Element} element 
 * @param {string} eventName 
 * @param {Function} eventHandler 
 */
function off(element, eventName, eventHandler) {
    removeHandler(element, eventName, eventHandler);
}

export default off;