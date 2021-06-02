import { addHandler } from './helpers';

/**
 * Add an event listener
 * 
 * @param {Element} element 
 * @param {string} eventName 
 * @param {string} selector 
 * @param {Function} handler 
 */
function on(element, eventName, selector, handler) {
    addHandler(element, eventName, selector, handler, false)
}

/**
 * Add an event listener
 * 
 * @name on
 * @param {Element} element 
 * @param {string} eventName 
 * @param {Function} handler 
 */

export default on;
