# Animation Functions

:warning:  **The animate.css file is requred for all Animate functions to work**: Please find the animation file [here][4]!
<br>
<br>

## End Animation Event

All animation functions return a Promise, the Promise is resolved when the animation ends.

```js
 __.animate.bounceOut(element).then(() => {
    console.log('Animation bounceOut done');
});
```
<br>

## Core Animation Function

The `animate()` function plays an animation immediately on the element and returns a Promise that resolves when the animation completes.

```js
__.animate.animate(element, 'fadeIn', { duration: '600ms' }).then(() => {
    console.log('Animation complete');
});
```

#### Parameters

*   `element` **[Element][1]** — the DOM element to animate
*   `name` **[String][2]** — the animation name (e.g., 'fadeIn', 'bounce', 'spin')
*   `options` **[object][3]** (optional) — configuration options

#### Options

- `duration` — animation duration (e.g., `'600ms'` or `600` for milliseconds)
- `delay` — animation delay (e.g., `'100ms'`)
- `repeat` — repeat count (default: `1`)
- `distance` — distance for slide/glide animations (e.g., `'30px'`)
- `scale` — scale factor for grow/shrink (e.g., `1.2`)
- `angle` — rotation angle in degrees (e.g., `45` or `'45deg'`)
- `intensity` — intensity for blur/wiggle (e.g., `'15px'` or `4`)
- `easing` — timing function (e.g., `'ease-out'`, `'cubic-bezier(...)'`)
- `direction` — directional suffix for animations with variants (e.g., `'up'`, `'left'`, `'down'`)
- `hideOnEnd` — force hide the element after animation (boolean, default: `false`)

<br>

## Event-Driven Animation Functions

The animation system provides separate functions for event-driven triggers. Developers handle the event logic explicitly.

### onClick

Play an animation when the element is clicked.

```js
__.animate.onClick(element, 'bounce', { duration: '600ms' });
```

### onHover

Play an animation when the element is hovered.

```js
__.animate.onHover(element, 'pulse', { duration: '800ms' });
```

### onEntrance

Play an animation when the element enters the viewport (IntersectionObserver).

```js
__.animate.onEntrance(element, 'fadeIn', { duration: '600ms', threshold: 0.2, once: true });
```

**Options:**
- `threshold` — IntersectionObserver threshold (default: `0.2`)
- `once` — play animation only once (default: `true`)

### onLoop

Play an animation in an infinite loop.

```js
__.animate.onLoop(element, 'breath', { duration: '2000ms' });
```

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

## Animation Categories

The animation library includes four main categories of animations:

### Scaling Animations
Scale-based entrance and transition animations:
- **expand** — scales from 0.8 to 1
- **grow** — scales from 0 to 1  
- **shrink** — scales from 1.2 to 1

### Morphing Animations
Filter and transform-based animations:
- **blur** — blurs in with opacity fade
- **reveal** — reveals with horizontal scale (scaleX)

### Transforming Animations
3D rotation and spin effects:
- **flip** — flips on X-axis (default)
- **flipX** — flips on X-axis
- **flipY** — flips on Y-axis
- **spin** — spins with rotation and scale

### Attention Animations
Quick animations for drawing attention:
- **bounce** — bounces up and down
- **flash** — flashes in and out
- **heartBeat** — pulses like a heartbeat
- **jello** — jiggly jello effect
- **pulse** — gentle pulsing effect
- **rubberBand** — stretches like rubber
- **shake** — side-to-side shaking
- **swing** — swings back and forth
- **tada** — magical tada effect
- **wobble** — wobbly effect
- **breath** — breathing effect (scale pulse, 2s default)
- **wiggle** — gentle rotation wiggle (600ms default)
- **poke** — vertical scale pulse (800ms default)

All animations support parametric customization and can be triggered via `animate()`, `onClick()`, `onHover()`, `onEntrance()`, or `onLoop()`:

```js
// Immediate play
__.animate.animate(element, 'expand', { duration: '600ms' });

// With event triggers
__.animate.onEntrance(element, 'blur', { duration: '600ms' });
__.animate.onHover(element, 'spin', { duration: '600ms' });
__.animate.onClick(element, 'grow', { duration: '600ms' });
__.animate.onLoop(element, 'breath', { duration: '2000ms' });
```

<br>
<br>

# Animate Functions

<br>

## blur

Blurs in the element. Shows hidden elements as a result with a blur-in effect.

```js
__.animate.blur(element, options);
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
__.animate.bounce(element, options);
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
__.animate.bounceIn(element, options);
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
__.animate.bounceOut(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms', direction: null }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** `'up'`, `'down'`, `'left'`, `'right'`
<br>
<br>

## breath

Creates a breathing animation on the element.

```js
__.animate.breath(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '2000ms', scale: 1.05 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## expand

Expands the element from a small scale. Shows hidden elements as a result.

```js
__.animate.expand(element, options);
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
__.animate.fadeIn(element, options);
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
__.animate.fadeOut(element, options);
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
__.animate.flash(element, options);
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
__.animate.flip(element, options);
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
__.animate.grow(element, options);
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
__.animate.heartBeat(element, options);
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
__.animate.jello(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '600ms' }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## poke

Creates a poking animation on the element.

```js
__.animate.poke(element, options);
```

#### Parameters

*   `element` **[Element][1]** 
*   `options` **[object][3]** (optional, default `{ duration: '800ms', scale: 1.05 }`)

Returns **[Promise][5]** — resolves when animation ends

**Direction options:** not applicable
<br>
<br>

## pulse

Plays a pulsing attention animation on the element.

```js
__.animate.pulse(element, options);
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
__.animate.reveal(element, options);
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
__.animate.rotateIn(element, options);
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
__.animate.rotateOut(element, options);
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
__.animate.rubberBand(element, options);
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
__.animate.shake(element, options);
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
__.animate.shrink(element, options);
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
__.animate.slideIn(element, options);
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
__.animate.slideOut(element, options);
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
__.animate.spin(element, options);
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
__.animate.swing(element, options);
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
__.animate.tada(element, options);
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
__.animate.wiggle(element, options);
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
__.animate.wobble(element, options);
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
__.animate.zoomingIn(element, options);
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
__.animate.zoomingOut(element, options);
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