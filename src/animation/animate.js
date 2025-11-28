
let animations = {
    show: [
        'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight',
        'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', 
        'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
        'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight',
        'zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight',
        'bounce', 'flash', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble',
        'expand', 'grow', 'shrink', 'blur', 'reveal', 'flip', 'flipX', 'flipY', 'spin', 'breath', 'poke', 'wiggle'
    ],
    hide: [
        'bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight',
        'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight', 
        'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpLeft',
        'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight',
        'zoomOut', 'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight'
    ],
    loopable: ['breath', 'poke', 'wiggle', 'bounce', 'flash', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'spin']
};

/**
 * 
 * The `animate()` function triggers a predefined animation on the specified `element`.
 * 
 * The animate.css file is requred for this function to work
 * 
 * ```js
 * __.animate.animate(element, animation, options);
 * ```
 * 
 * @param {Element} element
 * @param {string} animation
 * @param {object} [options={ duration: 1s, delay: 0, repeat: 1 }] 
 */
function animate(element, animation, options = {}) {

    // resolve directional suffix and validate
    animation = animation + directionSufix(options.direction);
   
    const isShow = animations.show.includes(animation);
    const isHide = animations.hide.includes(animation);
    const isLoopable = animations.loopable.includes(animation);
    
    return new Promise((resolve) => {
      
        // validate animation exists in registry
        if (!isShow && !isHide && !isLoopable) {
            console.error(`Animation ${animation} not found`);
            return Promise.reject(`Animation ${animation} not found`);
        }
   
        // prepare classes to add to element
        const classes = ['animate', animation];


        function handleAnimationEnd(event) {
            event.stopPropagation();

            // Only hide for 'hide' group or if explicitly requested
            if (isHide || options.hideOnEnd) {
                element.style.display = 'none';
            }

            element.classList.remove(...classes);

            resolve('Animation ended');
        }

        // set css variables
        if (options.duration)  element.style.setProperty('--animate-duration', options.duration);
        if (options.delay)     element.style.setProperty('--animate-delay', options.delay);
        if (options.repeat)    element.style.setProperty('--animate-repeat', options.repeat);
        if (options.distance)  element.style.setProperty('--animate-distance', options.distance);
        if (options.scale)     element.style.setProperty('--animate-scale', options.scale);
        if (options.angle)     element.style.setProperty('--animate-angle', options.angle);
        if (options.intensity) element.style.setProperty('--animate-intensity', options.intensity);
        if (options.easing)    element.style.setProperty('--animate-easing', options.easing);

        element.addEventListener('animationend', handleAnimationEnd, { once: true });

        element.classList.add(...classes);

        if (window.getComputedStyle(element).display === 'none') 
            element.style.display = '';

        if (isShow) 
            element.style.display = '';
    });

}

function directionSufix(direction) {
    if (direction)
        return direction.charAt(0).toUpperCase() + direction.slice(1);
    
    return ''

}

export default animate;



/*
function animation(element, animationName, options = {}) {

    // merge defaults then normalize into `opts`
    const opts = normalizeOptions(options);

    // per-element state to prevent double-wiring
    const state = getState(element);

    // resolve directional suffix and validate
    animationName = animationName + directionSufix(opts.direction);

    // validate animation exists in registry
    const isValid = animations.show.includes(animationName) || animations.hide.includes(animationName);
    if (!isValid) {
        console.error(`Animation ${animationName} not found`);
        return Promise.reject(`Animation ${animationName} not found`);
    }

    // set css variables
    setVars(element, opts);

    // prepare classes to add to element
    const classes = ['animate', animationName];

    // helper that plays the animation once and returns a Promise
    function playOnce() {
        return new Promise((resolve) => {
            const isShowing = animations.show.includes(animationName);
            const hideOnEnd = animations.hide.includes(animationName) || opts.hideOnEnd;

            function handleAnimationEnd(event) {
                event.stopPropagation();

                // Only hide for 'hide' group or if explicitly requested
                if (hideOnEnd) {
                    element.style.display = 'none';
                }

                element.classList.remove(...classes);
                resolve('Animation ended');
            }

            element.addEventListener('animationend', handleAnimationEnd, { once: true });

            element.classList.add(...classes);

            if (window.getComputedStyle(element).display === 'none') 
                element.style.display = '';

            if (isShowing) 
                element.style.display = '';
        });
    }

    // handlers for triggers
    if (opts.trigger === 'immediate' || opts.trigger === 'immediateOnce') {
        return playOnce();
    }

    if (opts.trigger === 'entrance') {
        // don't double observe
        if (state.entranceObserver) return Promise.resolve();

        return new Promise((resolve) => {
            const obs = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        playOnce().then(() => resolve());
                        if (!opts.loop) observer.unobserve(entry.target);
                    }
                });
            }, { threshold: opts.threshold });
            obs.observe(element);
            state.entranceObserver = obs;
        });
    }

    if (opts.trigger === 'hover') {
        if (state.hoverBound) return Promise.resolve();

        return new Promise((resolve) => {
            const onEnter = () => {
                playOnce().then(() => resolve());
            };
            const onLeave = () => {
                // nothing special on leave for one-shot; if you want to cancel, implement here
            };
            element.addEventListener('mouseenter', onEnter);
            element.addEventListener('mouseleave', onLeave);
            state.hoverBound = { onEnter, onLeave };
        });
    }

    if (opts.trigger === 'click') {
        if (state.clickBound) return Promise.resolve();

        return new Promise((resolve) => {
            const onClick = () => {
                playOnce().then(() => resolve());
            };
            element.addEventListener('click', onClick);
            state.clickBound = onClick;
        });
    }

    if (opts.trigger === 'loop') {
        // avoid double-starting a loop on the same element
        if (state.loopHandle) return Promise.resolve(state.loopHandle);

        // ensure iteration and apply classes (vars were already set)
        element.classList.add(...classes);
        element.style.animationIterationCount = 'infinite';

        const handle = {
            stop() {
                try {
                    element.classList.remove(...classes);
                    element.style.animationIterationCount = '';
                } finally {
                    // clear saved handle
                    if (state.loopHandle === handle) delete state.loopHandle;
                }
            }
        };

        state.loopHandle = handle;
        return Promise.resolve(handle);
    }

    // unknown trigger => fallback to immediate
    return playOnce();
}
*/