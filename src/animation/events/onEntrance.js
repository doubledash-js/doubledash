import animate from "../animate";
import { getState } from "../helpers";

function onEntrance(element, animation, options = {}) {

    options.once = options.once || false;
    options.threshold = options.threshold || 0.2;

    // per-element state to prevent double-wiring
    const state = getState(element);

    // don't double observe
    if (state.entranceObserver) 
        return Promise.resolve();

    return new Promise((resolve) => {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate(element, animation, options).then(() => resolve());
                   
                    if (options.once) 
                        observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: options.threshold
        });
        
        obs.observe(element);

        state.entranceObserver = obs;
    });
}

export default onEntrance;