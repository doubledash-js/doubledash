
const STATE_KEY = '__dd_animate_state';

function getState(el) {
    if (!el[STATE_KEY]) 
        el[STATE_KEY] = {};

    return el[STATE_KEY];
}

export { getState };