
let animations = {
    show: [
        'blurIn', 
        'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight',
        'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', 
        'flipInX', 'flipInY',
        'lightspeedInRight', 'lightspeedInLeft',
        'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
        'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight',
        'zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight',
        'bounce', 'flash', 'flip', 'headShake', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'spin', 'swing', 'tada', 'wobble'
    ],
    hide: [
        'blurOut', 
        'bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight',
        'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight', 
        'flipOutX', 'flipOutY',
        'lightspeedOutRight', 'lightspeedOutLeft',
        'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight',
        'zoomOut', 'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight'
    ],
    loopable: ['bounce', 'flash', 'flip', 'headShake', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'spin', 'swing', 'tada', 'wobble']
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

    // validate animation exists in registry early
    if (!isShow && !isHide && !isLoopable) {
        console.error(`Animation ${animation} not found`);
        return Promise.reject(`Animation ${animation} not found`);
    }

    // Accessibility: respect prefers-reduced-motion unless forced
    const prefersReduce = typeof window !== 'undefined' 
        && window.matchMedia 
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduce && !options.force) {
        // short-circuit: apply logical end state and return immediately
        if (isHide) element.style.display = 'none';
        if (isShow) element.style.display = '';

        const resolved = Promise.resolve('reduced-motion-skip');
        resolved.stop = () => {};
        resolved.finish = () => {};
        return resolved;
    }

    let finished = false;
    let resolvePromise;

    // prepare classes to add to element
    const classes = ['animate', animation];

    // shared cleanup helper
    function cleanup(shouldHide, resolveValue) {
        
        if (finished) return;
        finished = true;

        if (shouldHide) {
            element.style.display = 'none';
        }

        element.classList.remove(...classes);
        element.removeEventListener('animationend', handleAnimationEnd);

        resolvePromise(resolveValue);
    }

    // event handler (not registered with {once:true} so we can remove when stopping)
    function handleAnimationEnd(event) {
        event && event.stopPropagation();
        cleanup(isHide, 'Animation ended');
    }

    const promise = new Promise((resolve) => {
        resolvePromise = resolve;

        // set css variables
        if (options.duration)  element.style.setProperty('--animate-duration', options.duration);
        if (options.delay)     element.style.setProperty('--animate-delay', options.delay);
        if (options.repeat)    element.style.setProperty('--animate-repeat', options.repeat);
        if (options.distance)  element.style.setProperty('--animate-distance', options.distance);
        if (options.scale)     element.style.setProperty('--animate-scale', options.scale);
        if (options.angle)     element.style.setProperty('--animate-angle', options.angle);
        if (options.intensity) element.style.setProperty('--animate-intensity', options.intensity);
        if (options.easing)    element.style.setProperty('--animate-easing', options.easing);

        // wire up listener and play
        element.addEventListener('animationend', handleAnimationEnd);

        element.classList.add(...classes);

        if (window.getComputedStyle(element).display === 'none')
            element.style.display = '';

        if (isShow)
            element.style.display = '';
    });

    // control methods
    promise.stop = () => cleanup(false, 'stopped');
    promise.finish = () => cleanup(isHide, 'finished');

    return promise;
}

function directionSufix(direction) {
    if (direction)
        return direction.charAt(0).toUpperCase() + direction.slice(1);
    
    return ''

}

export default animate;


