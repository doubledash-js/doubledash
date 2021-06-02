import settings from './settings';
import isString from '../lang/isString';

function getTypeEvent(eventName) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    return eventName.replace(settings.stripNameRegex, '')
}

function eventHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element

        return fn.apply(element, [event])
    }
}
  
function eventDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector)

        for (let { target } = event; target && target !== this; target = target.parentNode) {
            for (let i = domElements.length; i--;) {
                if (domElements[i] === target) {
                    event.delegateTarget = target

                    return fn.apply(target, [event])
                }
            }
        }

        // To please ESLint
        return null
    }
}

function addHandler(element, eventName, selector, handler, once) {
    if (!isString(eventName) || !element) {
        return
    }

    const originalEventName = eventName;
    const delegation = isString(selector);
    handler = delegation ? handler : selector;
    once = once ? once : false;
    eventName = getTypeEvent(originalEventName);
    
    const isNative = settings.nativeEvents.includes(eventName);
    if (!isNative) {
        eventName = originalEventName;
    }

    const fn = delegation ?
        eventDelegationHandler(element, selector, handler) :
        eventHandler(element, handler)

    element.addEventListener(eventName, fn, once);
}

function removeHandler(element, eventName, eventHandler) {

    if (!isString(eventName) || !element) {
        return
    }

    element.removeEventListener(eventName, eventHandler);
}

export { getTypeEvent, addHandler, removeHandler };
