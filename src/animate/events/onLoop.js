import animate from "../animate";

function onLoop(element, animation, options = {}) {

    options.repeat = 'infinite';

    animate(element, animation, options);

    return Promise.resolve();
}

export default onLoop;