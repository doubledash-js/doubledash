import animate from "../animate";

function onLoop(element, animation, options = {}) {

    options.repeat = 'infinite';

    // return the animate handle so callers can stop()/finish() the loop
    return animate(element, animation, options);
}

export default onLoop;