

let animations = {
    show: [
        'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight',
        'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight', 
        'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpLeft',
        'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight',
        'zoomingIn', 'zoomingInUp', 'zoomingInDown', 'zoomingInLeft', 'zoomingInRight'
    ],
    hide: [
        'bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight',
        'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight', 
        'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpLeft',
        'slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight',
        'zoomingOut', 'zoomingOutUp', 'zoomingOutDown', 'zoomingOutLeft', 'zoomingOutRight'
    ],
    attention: ['bounce', 'flash', 'heartBeat', 'jello', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble']
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
function animate(element, animation, options) {

    let isShowing = animations.show.includes(animation) || false;
    let attention = animations.attention.includes(animation);

    // We create a Promise and return it
    return new Promise((resolve, reject) => {

        if (!animations.show.includes(animation) && !animations.hide.includes(animation) && !animations.attention.includes(animation)) {
            console.error(`Animation ${animation} not found`);
            reject(`Animation ${animation} not found`);
            return;
        }

        let classes = ['animate', animation];

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
        
            if (!isShowing && !attention) {
                element.style.display = 'none';
            }
            
            element.classList.remove(...classes);

            resolve('Animation ended');
        }

        if (options.duration) {
            element.style.setProperty('--animate-duration', options.duration);
        }

        if (options.delay) {
            element.style.setProperty('--animate-delay', options.delay);
        }

        if (options.repeat) {
            element.style.setProperty('--animate-repeat', options.repeat);
        }

        element.addEventListener('animationend', handleAnimationEnd, { once: true });

        element.classList.add(...classes);

        if (window.getComputedStyle(element).display === "none") {
            element.style.display = '';
        }

        if (isShowing && !attention) {
            element.style.display = '';
        }

    });
}

export default animate;