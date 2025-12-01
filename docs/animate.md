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

# Animate Functions

The animation system provides convenient animation functions.

<br>

## blur

Blurs in the element. Shows hidden elements as a result with a blur-in effect.

```js
__.animation.blur(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', intensity: '10px' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## bounce

Plays a bouncing attention animation on the element.

```js
__.animation.bounce(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## bounceIn

Bounces in the element. Shows hidden elements as a result.

```js
__.animation.bounceIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## bounceOut

Bounces out the element. Hides visible elements as a result.

```js
__.animation.bounceOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## expand

Expands the element from a small scale. Shows hidden elements as a result.

```js
__.animation.expand(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', scale: 0.8 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## fadeIn

Fades in the element. Shows hidden elements as a result.

```js
__.animation.fadeIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`, `'topLeft'`, `'topRight'`, `'bottomLeft'`, `'bottomRight'`
<br>
<br>

## fadeOut

Fades out the element. Hides visible elements as a result.

```js
__.animation.fadeOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`, `'topLeft'`, `'topRight'`, `'bottomLeft'`, `'bottomRight'`
<br>
<br>

## flash

Plays a flashing attention animation on the element.

```js
__.animation.flash(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## flip

Flips the element along the X-axis (or Y-axis with `direction: 'y'`). Shows hidden elements as a result.

```js
__.animation.flip(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', angle: 90, direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'x'`, `'y'`
<br>
<br>

## grow

Grows the element from zero scale. Shows hidden elements as a result.

```js
__.animation.grow(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', scale: 0 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## heartBeat

Plays a heart-beat pulsing animation on the element.

```js
__.animation.heartBeat(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## jello

Plays a jello-like effect on the element.

```js
__.animation.jello(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## pulse

Plays a pulsing attention animation on the element.

```js
__.animation.pulse(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## reveal

Reveals the element with a horizontal scale effect. Shows hidden elements as a result.

```js
__.animation.reveal(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## rotateIn

Rotates in the element. Shows hidden elements as a result.

```js
__.animation.rotateIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'downLeft'`, `'downRight'`, `'upLeft'`, `'upRight'`
<br>
<br>

## rotateOut

Rotates out the element. Hides visible elements as a result.

```js
__.animation.rotateOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'downLeft'`, `'downRight'`, `'upLeft'`, `'upRight'`
<br>
<br>

## rubberBand

Plays a rubber-band effect on the element.

```js
__.animation.rubberBand(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## shake

Plays a shaking attention animation on the element.

```js
__.animation.shake(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## shrink

Shrinks the element from a large scale. Shows hidden elements as a result.

```js
__.animation.shrink(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', scale: 1.2 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## slideIn

Slides in the element. Shows hidden elements as a result.

```js
__.animation.slideIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## slideOut

Slides out the element. Hides visible elements as a result.

```js
__.animation.slideOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## spin

Spins the element with a rotation and scale effect. Shows hidden elements as a result.

```js
__.animation.spin(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', angle: -180 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## swing

Plays a swinging attention animation on the element.

```js
__.animation.swing(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## tada

Plays a magical tada effect on the element.

```js
__.animation.tada(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## wiggle

Creates a wiggling animation on the element. 

```js
__.animation.wiggle(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', angle: 2 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## wobble

Plays a wobbling attention animation on the element.

```js
__.animation.wobble(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## zoomingIn

Zooms in the element. Shows hidden elements as a result.

```js
__.animation.zoomingIn(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## zoomingOut

Zooms out the element. Hides visible elements as a result.

```js
__.animation.zoomingOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`

[1]: https://developer.mozilla.org/docs/Web/API/Element

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[4]: https://github.com/zuulinc/doubledash/blob/main/dist/doubledash-animate.min.css

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise