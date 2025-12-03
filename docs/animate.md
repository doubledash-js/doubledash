# Animation Functions

:warning:  **The animate.css file is requred for all Animate functions to work**: Please find the animation file [here][4]!
<br>
<br>

## Core Animation Function

The `animate()` function plays an animation immediately on the element and returns a Promise that resolves when the animation completes.

```js
__.animation.animate(element, 'fadeIn', { duration: '600ms' }).then(() => {
    console.log('Animation complete');
});
```

#### Parameters

*   `element` **[Element][1]** — the DOM element to animate
*   `name` **[String][2]** — the animation name (e.g., 'fadeIn', 'bounce', 'spin')
*   `options` **[object][3]** (optional) — configuration options

#### Options

- `duration` — animation duration (e.g., `'600ms'` or `600 for milliseconds)
- `delay` — animation delay (e.g., `'100ms'`)
- `repeat` — repeat count (default: `1`)
- `distance` — distance for slide/glide animations (e.g., `'30px'`)
- `scale` — scale factor for grow/shrink (e.g., `1.2`)
- `angle` — rotation angle in degrees (e.g., `45` or `'45deg'`)
- `intensity` — intensity for blur/wiggle (e.g., `'15px'` or 4)
- `easing` — timing function (e.g., `'ease-out'`, `'cubic-bezier(...)'`)
- `direction` — directional suffix for animations with variants (e.g., `'up'`, `'left'`, `'down'`)
- `force` — when `true`, ignores the user's `prefers-reduced-motion` setting and runs the animation (boolean, default: `false`)

Accessibility note: the library respects the user's `prefers-reduced-motion` setting by default and will skip animations if the user prefers reduced motion. Set `force: true` to override when appropriate.

<br>

## End Animation Event

Animation functions return a thenable handle whose primary job is a Promise that resolves when the animation ends.
The handle also exposes `stop()` and `finish()` methods for programmatic control of a running animation.

```js
// animate() returns a thenable handle
const handle = __.animation.animate(element, 'fadeIn', { duration: '600ms' });

// wait for completion
handle.then(() => console.log('Animation complete'));

// stop the animation early
handle.stop();

// or immediately finish it (apply end state)
handle.finish();
```
<br>

## Event-Driven Animation Functions

The animation system provides separate functions for event-driven triggers. Developers handle the event logic explicitly.

### onClick

Play an animation when the element is clicked.

```js
__.animation.onClick(element, 'bounce', { duration: '600ms' });
```

### onHover

Play an animation when the element is hovered.

```js
__.animation.onHover(element, 'pulse', { duration: '800ms' });
```

### onEntrance

Play an animation when the element enters the viewport (IntersectionObserver).

```js
__.animation.onEntrance(element, 'fadeIn', { duration: '600ms', threshold: 0.2, once: true });
```

**Options:**
- `threshold` — IntersectionObserver threshold (default: `0.2`)
- `once` — play animation only once (default: `true`)

### onLoop

Play an animation in an infinite loop.

```js
__.animation.onLoop(element, 'breath', { duration: '2000ms' });
```

<br>
<br>

# CSS Variables

CSS variable names used by the library (preferred convention):

- `--animate-duration` — animation duration (e.g., `600ms`)
- `--animate-delay` — animation delay
- `--animate-repeat` — repeat count
- `--animate-distance` — distance used by slide/glide
- `--animate-scale` — scale used by expand/grow
- `--animate-angle` — angle used by flip/rotate
- `--animate-intensity` — intensity used by blur
- `--animate-easing` — easing/timing function

<br>
<br>


# Animation Types

The animation system provides a wide range of animation options. Each row lists the animation name, the primary action (showing/hiding/attention), a short description, and typical option defaults.

| Name | Action | Description | Typical options |
| ---- | ------ | ----------- | --------------- |
| bounce | Attention | Repeating bounce (use onLoop for continuous). | { duration: '1s', delay: '0s', repeat: 1 } |
| flash | Attention | Quick flash in/out. | { duration: '1s', delay: '0s', repeat: 1 } |
| flip | Attention | Quick flip effect. | { duration: '1s', delay: '0s', repeat: 1 } |
| headShake | Attention | Quick head-shake wobble. | { duration: '1s', delay: '0s', repeat: 1, easing: 'ease-in-out' } |
| heartBeat | Attention | Pulsing beat. | { duration: '1s', delay: '0s', repeat: 1, easing: 'ease-in-out' } |
| jello | Attention | Elastic wobble effect. | { duration: '1s', delay: '0s', repeat: 1 } |
| pulse | Attention | Gentle pulse. | { duration: '1s', delay: '0s', repeat: 1, easing: 'ease-in-out' } |
| rubberBand | Attention | Stretch and snap effect. | { duration: '1s', delay: '0s', repeat: 1 } |
| shake | Attention | Shake effect. | { duration: '1s', delay: '0s', repeat: 1, direction: 'x' \| 'y'  } |
| spin | Attention | Spin rotation. | { duration: '1s', delay: '0s', repeat: 1, angle: -180deg } |
| swing | Attention | Swinging motion. | { duration: '1s', delay: '0s', repeat: 1 } |
| tada | Attention | Exaggerated celebration effect. | { duration: '1s', delay: '0s', repeat: 1 } |
| wobble | Attention | Wobbling translate/rotate. | { duration: '1s', delay: '0s', repeat: 1 } |
| blurIn | Showing | Blur + fade in. Use for soft entrance effects. | { duration: '1s', delay: '0s', repeat: 1, intensity: '10px' } |
| blurOut | Hiding | Blur + fade out. Use to softly remove elements. | { duration: '1s', delay: '0s', repeat: 1, intensity: '10px' } |
| bounceIn | Showing | Bouncy entrance moving in the direction (vertical). | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'up' \| 'down' \| 'left' \| 'right' } |
| bounceOut | Hiding | Bouncy exit moving in the direction (vertical). | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'up' \| 'down' \| 'left' \| 'right' } |
| fadeIn | Showing | Simple fade-in while moving in the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'up' \| 'down' \| 'left' \| 'right' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' } |
| fadeOut | Hiding | Simple fade-out while moving in the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'up' \| 'down' \| 'left' \| 'Right' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' } |
| flipIn | Showing | 3D flip in on the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: 'x' \| 'y' } |
| flipOut | Hiding | 3D flip out on the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: 'x' \| 'y' } |
| lightspeedIn | Showing | Fast horizontal entrance with skew to the direction. | { duration: '1s', delay: '0s', repeat: 1, easing: 'ease-out', direction: 'right' \| 'left' } |
| lightspeedOut | Hiding | Fast horizontal exit to the direction. | { duration: '1s', delay: '0s', repeat: 1, easing: 'ease-in', direction: 'right' \| 'left'  } |
| rotateIn | Showing | Rotates in with pivot and to the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'downLeft' \| 'downRight' \| 'upLeft' \| 'upRight } |
| rotateOut | Hiding | Rotates out with pivot and to the direction. | { duration: '1s', delay: '0s', repeat: 1, direction: '' \| 'downLeft' \| 'downRight' \| 'upLeft' \| 'upRight } |
| slideIn | Showing | Slide in towards the direction. | { duration: '1s', delay: '0s', repeat: 1, distance: '100%' \| '-100%', direction: 'up' \| 'down' \| 'left' \| 'right' } |
| slideOut | Hiding | Slide out towards the direction. | { duration: '1s', delay: '0s', repeat: 1, distance: '100%' \| '-100%', direction: 'up' \| 'down' \| 'left' \| 'right' } |
| zoomIn | Showing | Scale + fade and moving towards the direction. | { duration: '1s', delay: '0s', repeat: 1, scale: 0.3, direction: '' \| 'up' \| 'down' \| 'left' \| 'right' } |
| zoomOut | Hiding | Scale down + fade and moving towards the direction. | { duration: '1s', delay: '0s', repeat: 1, scale: 0.3, direction: '' \| 'up' \| 'down' \| 'left' \| 'right' } |

<br>

[1]: https://developer.mozilla.org/docs/Web/API/Element

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://github.com/zuulinc/doubledash/blob/main/dist/doubledash-animate.min.css

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise