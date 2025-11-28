import animate from "../animate";
import { getState } from "../helpers";

function onClick(element, animation, options = {}) {

    // per-element state to prevent double-wiring
    const state = getState(element);

    if (state.clickBound) return Promise.resolve();

    return new Promise((resolve) => {
        const onClick = () => {
            animate(element, animation, options).then(() => resolve());
        };

        element.addEventListener('click', onClick);
        
        state.clickBound = onClick;
    });
}

export default onClick;