import { addHandler } from './helpers';

/**
 * Run an event callback exactly once and then automatically remove it. Works the same as the on() method.
 * 
 * @param {Element} element 
 * @param {string} eventName 
 * @param {string} selector
 * @param {Function} handler 
 */
function once(element, eventName, selector, handler) {
    addHandler(element, eventName, selector, handler, true)
}

/**
 * Run an event callback exactly once and then automatically remove it. Works the same as the on() method.
 * 
 * @name once
 * @param {Element} element 
 * @param {string} eventName 
 * @param {Function} handler 
 */

export default once;
