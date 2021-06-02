import isBoolean from '../lang/isBoolean';
import isObject from '../lang/isObject';

/**
 * The extend() function merges the contents of two or more objects together into the first object.
 * 
 * @param {object} obj1
 * @param {object} obj2
 * @returns {object}
 */
function extend() {

	// Variables
	let extended = {};
	let deep = false;
	let i = 0;
	let length = arguments.length;

	// Check if a deep merge
	if ( isBoolean(arguments[0]) ) {
		deep = arguments[0];
		i++;
	}

	// Loop through each object and conduct a merge
	for ( ; i < length; i++ ) {
		let obj = arguments[i];
		
        for ( let prop in obj ) {
			if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
				// If deep merge and property is an object, merge properties
				if ( deep && isObject(obj[prop]) ) {
					extended[prop] = extend( true, extended[prop], obj[prop] );
				} else {
					extended[prop] = obj[prop];
				}
			}
		}
	}

	return extended;
}

/**
 * Merge the contents of two or more objects together into the first object.
 * 
 * @name extend
 * 
 * @param {boolean} deep
 * @param {object} obj1
 * @param {object} obj2
 * @returns {object}
 */

export default extend;