import animate from "../animate";
import { getState } from "../helpers";

function onHover(element, animation, options = {}) {

    // per-element state to prevent double-wiring
    const state = getState(element);

    if (state.hoverBound) return Promise.resolve();

    return new Promise((resolve) => {
        const onEnter = () => {
            animate(element, animation, options).then(() => resolve());
        };

        const onLeave = () => {
            // nothing special on leave for one-shot; if you want to cancel, implement here
        };
        
        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);
        
        state.hoverBound = { onEnter, onLeave };
    });
}

export default onHover;