# Doubledash Animation Module Enhancement Plan

## Overview

This document outlines a comprehensive roadmap to evolve the `animate` module from a basic one-shot animation trigger system into a rich, event-driven animation framework. The enhancements will enable waffl and other projects to leverage doubledash as a unified animation solution across the Foragefox ecosystem.

---

## Phase 1: Event-Driven Animation Triggers (Q1 2025)

### Goal
Enable animations to be triggered by DOM events (entrance, hover, click) and loops, not just imperatively via JavaScript.

### 1.1 Extend Core `animation()` Function

**File:** `src/animate/animation.js`

Add a new `trigger` parameter to support event-driven animation.

```javascript
function animation(element, animationName, options = {}) {
    options = options || {};
    
    const opts = {
        duration: options.duration || null,
        delay: options.delay || null,
        repeat: options.repeat || 1,
        // NEW: trigger-based options
        trigger: options.trigger || 'immediate', // 'immediate' | 'entrance' | 'hover' | 'click' | 'loop'
        observerThreshold: options.observerThreshold || 0.2,
        loop: options.loop || false,
        ...options
    };

    return new Promise((resolve, reject) => {
        // Existing validation & Promise setup
        
        // NEW: dispatch to trigger handler
        switch (opts.trigger) {
            case 'immediate':
                return playAnimationOnce(element, animationName, opts, resolve, reject);
            case 'entrance':
                return setupEntranceObserver(element, animationName, opts, resolve, reject);
            case 'hover':
                return setupHoverTrigger(element, animationName, opts, resolve, reject);
            case 'click':
                return setupClickTrigger(element, animationName, opts, resolve, reject);
            case 'loop':
                return setupLoopAnimation(element, animationName, opts, resolve, reject);
            default:
                reject(`Unknown trigger type: ${opts.trigger}`);
        }
    });
}
```

### 1.2 New Internal Trigger Handlers

**File:** `src/animate/animation.js`

Implement the following internal functions to handle each trigger type:

#### `playAnimationOnce(element, animationName, options, resolve, reject)`
- Existing behavior; plays animation once immediately
- Cleans up classes and resolves Promise on `animationend`

#### `setupEntranceObserver(element, animationName, options, resolve, reject)`
- Uses `IntersectionObserver` to detect when element enters viewport
- Plays animation once on first intersection
- Unobserves after playing (unless `loop: true`)
- Per-element state guard to prevent duplicate observers (see Section 1.4)

#### `setupHoverTrigger(element, animationName, options, resolve, reject)`
- Adds `mouseenter` listener → applies animation classes
- Adds `mouseleave` listener → removes animation classes
- Per-element state guard to prevent duplicate listeners
- Returns Promise that resolves on first hover completion

#### `setupClickTrigger(element, animationName, options, resolve, reject)`
- Adds `click` listener → plays animation once per click
- Per-element state guard
- Returns Promise that resolves on first click animation

#### `setupLoopAnimation(element, animationName, options, resolve, reject)`
- Sets `animation-iteration-count: infinite` on element
- Applies animation class immediately
- Never unobserves/removes listener
- Promise resolves immediately (loop is infinite)

### 1.3 Per-Element State Management

**Motivation:** Prevent double-wiring of event listeners when the same action is called on the same element.

**File:** `src/animate/animation.js`

Add a helper utility:

```javascript
const ANIMATE_STATE_KEY = '__dd_animate_state';

function getAnimationState(element) {
    if (!element[ANIMATE_STATE_KEY]) {
        element[ANIMATE_STATE_KEY] = {};
    }
    return element[ANIMATE_STATE_KEY];
}

function setAnimationState(element, key, value) {
    getAnimationState(element)[key] = value;
}

function hasAnimationState(element, key) {
    return !!getAnimationState(element)[key];
}
```

Usage in trigger handlers:
```javascript
if (hasAnimationState(element, 'hoverListener')) return Promise.resolve();
setAnimationState(element, 'hoverListener', { onEnter, onLeave });
```

### 1.4 Convenience Trigger Wrappers

**File:** `src/animate/` (new files)

Create high-level trigger functions that wrap `animation()` for common patterns:

#### `src/animate/onEntrance.js`
```javascript
function onEntrance(element, animationName, options = {}) {
    return animation(element, animationName, { ...options, trigger: 'entrance' });
}
export default onEntrance;
```

#### `src/animate/onHover.js`
```javascript
function onHover(element, animationName, options = {}) {
    return animation(element, animationName, { ...options, trigger: 'hover' });
}
export default onHover;
```

#### `src/animate/onClick.js`
```javascript
function onClick(element, animationName, options = {}) {
    return animation(element, animationName, { ...options, trigger: 'click' });
}
export default onClick;
```

#### `src/animate/loop.js`
```javascript
function loop(element, animationName, options = {}) {
    return animation(element, animationName, { ...options, trigger: 'loop', loop: true });
}
export default loop;
```

### 1.5 Update Exports

**File:** `src/animate/index.js`

```javascript
import animate from './animation';
import onEntrance from './onEntrance';
import onHover from './onHover';
import onClick from './onClick';
import loop from './loop';
// ... existing imports

export default {
    animation,
    onEntrance,
    onHover,
    onClick,
    loop,
    // ... existing exports
};
```

### 1.6 Documentation

**File:** `docs/animate.md`

Add new sections:

#### Event-Driven Animations

```markdown
### onEntrance(element, animationName, options)
Plays an animation when the element enters the viewport.

```js
__.animate.onEntrance(element, 'fadeIn', { threshold: 0.2 });
```

### onHover(element, animationName, options)
Plays an animation on mouseenter; reverses on mouseleave.

```js
__.animate.onHover(element, 'pulse', { duration: '600ms' });
```

### onClick(element, animationName, options)
Plays an animation on each click.

```js
__.animate.onClick(element, 'bounce', { duration: '500ms' });
```

### loop(element, animationName, options)
Plays an animation in an infinite loop.

```js
__.animate.loop(element, 'pulse', { duration: '1000ms' });
```

### animation(element, animationName, options)
**New:** `trigger` option support.

```js
__.animate.animate(element, 'fadeIn', {
    trigger: 'entrance',
    duration: '600ms',
    observerThreshold: 0.2
});
```
```

---

## Phase 2: Extended Animation Catalog (Q1–Q2 2025)

### Goal
Add missing animation types (blur, expand, grow, shrink, etc.) to the animation library, making doubledash the single source of truth for animations across Foragefox.

### 2.1 New Animation Categories

**Directory structure:**
```
src/css/
  attention/     (existing)
  bouncing/      (existing)
  fading/        (existing)
  rotating/      (existing)
  sliding/       (existing)
  zooming/       (existing)
  ─────────────────────────
  scaling/       (NEW)
  morphing/      (NEW)
  transforming/  (NEW)
  looping/       (NEW)
```

### 2.2 Scaling Animations

**File:** `src/css/scaling/expand.scss`
```scss
.expand {
  animation-name: expand;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  transform-origin: center;
}

@keyframes expand {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

**File:** `src/css/scaling/grow.scss`
```scss
.grow {
  animation-name: grow;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
}

@keyframes grow {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

**File:** `src/css/scaling/shrink.scss`
```scss
.shrink {
  animation-name: shrink;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
}

@keyframes shrink {
  0% {
    opacity: 0;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 2.3 Morphing Animations

**File:** `src/css/morphing/blur.scss`
```scss
.blur {
  animation-name: blur-in;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
}

@keyframes blur-in {
  0% {
    opacity: 0;
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
```

**File:** `src/css/morphing/reveal.scss`
```scss
.reveal {
  animation-name: reveal;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
  transform-origin: left center;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

### 2.4 Transforming Animations (Directional)

**File:** `src/css/transforming/flip.scss`
```scss
.flip,
.flipX {
  animation-name: flip-x;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
  transform-origin: center;
  perspective: 1000px;
}

.flipY {
  animation-name: flip-y;
}

@keyframes flip-x {
  0% {
    opacity: 0;
    transform: rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0);
  }
}

@keyframes flip-y {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateY(0);
  }
}
```

**File:** `src/css/transforming/spin.scss`
```scss
.spin {
  animation-name: spin-in;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
}

@keyframes spin-in {
  0% {
    opacity: 0;
    transform: rotate(-180deg) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}
```

### 2.5 Looping Animations

**File:** `src/css/looping/breath.scss`
```scss
.breath {
  animation-name: breath;
  animation-duration: var(--animate-duration, 2s);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes breath {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

**File:** `src/css/looping/wiggle.scss`
```scss
.wiggle {
  animation-name: wiggle;
  animation-duration: var(--animate-duration, 600ms);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: center;
}

@keyframes wiggle {
  0% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
}
```

**File:** `src/css/looping/poke.scss`
```scss
.poke {
  animation-name: poke;
  animation-duration: var(--animate-duration, 800ms);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: center bottom;
}

@keyframes poke {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.95); }
}
```

### 2.6 Update SCSS Index

**File:** `src/css/animate.scss`

```scss
@import 'base';

/* Attention */
@import 'attention/bounce';
// ... existing

/* Looping */
@import 'looping/breath';
@import 'looping/poke';
@import 'looping/wiggle';
@import 'looping/flash';
@import 'looping/swing';
@import 'looping/rubber';
@import 'looping/flap';

/* Scaling */
@import 'scaling/expand';
@import 'scaling/grow';
@import 'scaling/shrink';

/* Morphing */
@import 'morphing/blur';
@import 'morphing/reveal';

/* Transforming */
@import 'transforming/flip';
@import 'transforming/spin';
```

### 2.7 Update Animation Registry

**File:** `src/animate/animation.js`

Update the `animations` object to include new types:

```javascript
let animations = {
    show: [
        // ... existing
    ],
    hide: [
        // ... existing
    ],
    attention: [
        // ... existing
    ],
    scaling: ['expand', 'grow', 'shrink'],
    morphing: ['blur', 'reveal'],
    transforming: ['flip', 'flipX', 'flipY', 'spin'],
    looping: ['breath', 'poke', 'wiggle', 'flash', 'swing', 'rubber', 'flap']
};
```

Update validation to include all new categories:

```javascript
const isValidAnimation = (name) => {
    return Object.values(animations).flat().includes(name);
};
```

---

## Phase 3: Parametric & Directional Animations (Q2 2025)

### Goal
Support per-animation parameterization for distance, scale, angle, intensity, and direction to reduce the need for separate CSS class variants.

### 3.1 CSS Variable Expansion

**File:** `src/css/base.scss`

```scss
// Existing vars
:root {
  --animate-duration: 1s;
  --animate-delay: 0s;
  --animate-repeat: 1;
  
  // NEW: Parametric vars
  --animate-distance: 20px;      // for slide/glide
  --animate-scale: 1.05;         // for expand/grow
  --animate-angle: 10deg;        // for rotate/flip
  --animate-intensity: 10px;     // for blur
  --animate-easing: ease-out;
}
```

### 3.2 Update Keyframes to Use Variables

**Example:** `src/css/sliding/slideIn.scss`

```scss
.slideIn {
  animation-name: slideIn;
  animation-duration: var(--animate-duration);
  animation-delay: var(--animate-delay);
  animation-fill-mode: both;
  animation-timing-function: var(--animate-easing);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(var(--animate-distance));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 3.3 Direction Variants via Data Attributes

Support direction modifiers in the `animation()` function:

**File:** `src/animate/animation.js`

```javascript
function animation(element, animationName, options = {}) {
    // ... existing code ...
    
    const opts = {
        // ... existing ...
        direction: options.direction || null, // 'up' | 'down' | 'left' | 'right'
        distance: options.distance || '20px',
        scale: options.scale || 1.05,
        angle: options.angle || 10,
        intensity: options.intensity || 10,
        easing: options.easing || 'ease-out'
    };
    
    // Apply parametric CSS vars to element
    if (opts.distance) element.style.setProperty('--animate-distance', opts.distance);
    if (opts.scale) element.style.setProperty('--animate-scale', opts.scale);
    if (opts.angle) element.style.setProperty('--animate-angle', opts.angle + 'deg');
    if (opts.intensity) element.style.setProperty('--animate-intensity', opts.intensity);
    if (opts.easing) element.style.setProperty('--animate-easing', opts.easing);
    
    // Apply directional class if applicable
    if (opts.direction) {
        element.classList.add(`${animationName}${capitalize(opts.direction)}`);
    }
}
```

### 3.4 Examples

```javascript
// Slide 30px down
__.animate.slideIn(element, { duration: '600ms', distance: '30px' });

// Grow to 1.2x scale
__.animate.grow(element, { scale: 1.2, duration: '400ms' });

// Blur with intensity 15px
__.animate.blur(element, { intensity: 15, duration: '500ms' });

// Flip 45 degrees
__.animate.flip(element, { angle: 45, direction: 'y', duration: '600ms' });
```

---

## Phase 4: Integration with Waffl (Q2 2025)

### Goal
Enable waffl components to use doubledash animation directly via the `data-logic` system.

### 4.1 Waffl Logic Adapter

**File:** `waffl-components/src/javascript/actions/animation.js`

Instead of maintaining separate CSS, import and wrap doubledash's animation:

```javascript
import __ from '@foragefox/doubledash';

export default function animation(element, options = {}) {
    // Map waffl logic to doubledash animation
    const animName = options.type || 'fadeIn';
    const trigger = options.interaction || 'immediate';
    
    const ddOpts = {
        duration: options.duration ? `${options.duration}ms` : '600ms',
        delay: options.delay ? `${options.delay}ms` : null,
        trigger,
        distance: options.distance ? `${options.distance}px` : null,
        scale: options.scale,
        angle: options.angle,
        intensity: options.intensity ? `${options.intensity}px` : null,
        direction: options.direction,
        observerThreshold: options.threshold || 0.2,
        loop: options.loop || false
    };
    
    // Call doubledash animation
  return __.animate.animate(element, animName, ddOpts);
}
```

### 4.2 Benefits

- ✅ Single source of truth for animations
- ✅ Shared CSS keyframes and utilities
- ✅ Reduced bundle size
- ✅ Consistent API across projects
- ✅ Easier maintenance and feature parity

---

## Phase 5: Advanced Features (Q3 2025+)

### 5.1 Chaining & Sequencing

Enable animation chaining with Promise-based API:

```javascript
__.animate.fadeIn(element1, opts)
  .then(() => __.animate.slideIn(element2, opts))
  .then(() => __.animate.bounce(element3, opts))
  .catch(err => console.error(err));
```

### 5.2 Scroll-Triggered Animations

Extend trigger types:

```javascript
__.animate.animate(element, 'fadeIn', {
  trigger: 'scroll',
  scrollOffset: 100 // trigger when scrolled 100px past element
});
```

### 5.3 Mouse-Movement Parallax

```javascript
__.animate.parallax(element, {
  intensity: 20, // px
  direction: 'vertical' // or 'horizontal'
});
```

### 5.4 Group Animations

Stagger animations across multiple elements:

```javascript
__.animate.stagger(elements, 'fadeIn', {
  delay: 100, // ms between each element
  duration: '600ms'
});
```

### 5.5 Performance Optimizations

- GPU acceleration via `will-change` and `transform`
- Debouncing/throttling for scroll/hover events
- RequestAnimationFrame for smooth updates
- Prefers-reduced-motion support

---

## Implementation Roadmap

| Phase | Timeline | Key Deliverables | Files |
|-------|----------|------------------|-------|
| **1** | Q1 2025  | Event-driven triggers (entrance, hover, click, loop) | `animation.js`, `onEntrance.js`, `onHover.js`, `onClick.js`, `loop.js` |
| **2** | Q1–Q2 2025 | Extended animation catalog (blur, expand, grow, shrink, flip, spin, looping) | `src/css/scaling/`, `src/css/morphing/`, `src/css/transforming/`, `src/css/looping/` |
| **3** | Q2 2025  | Parametric animations (distance, scale, angle, intensity, direction) | `src/css/base.scss`, `animation.js` |
| **4** | Q2 2025  | Waffl integration adapter | `waffl-components/src/javascript/actions/animation.js` |
| **5** | Q3+ 2025 | Advanced features (sequencing, scroll, parallax, stagger, a11y) | `sequence.js`, `scroll.js`, `parallax.js`, `stagger.js` |

---

## Testing Strategy

### Unit Tests
- Trigger handlers (entrance, hover, click, loop)
- Per-element state guards
- Parameter validation and defaults
- Promise resolution/rejection

### Integration Tests
- Multiple animations on same element
- Event listener cleanup
- IntersectionObserver behavior
- CSS variable application

### Visual Regression Tests
- Keyframe accuracy across browsers
- Timing and easing validation
- Direction variants
- Performance benchmarks

---

## Breaking Changes & Migration Path

### Phase 1–3: Backward Compatible
- New `trigger` parameter is optional (defaults to `'immediate'`)
- Existing code continues to work unchanged
- New convenience functions are additive

### Phase 4: Waffl Integration
- Waffl can immediately switch to `__.animate.*` instead of custom CSS
- Dual implementations possible during transition period

### Migration Guide
```javascript
// Before (waffl custom)
import animation from './actions/Animation.js';
animation(element, { type: 'fade', interaction: 'entrance' });

// After (doubledash)
import __ from '@foragefox/doubledash';
__.animate.onEntrance(element, 'fadeIn', { duration: '600ms' });
```

---

## Version Numbering

- **v1.3.0** — Phase 1 (event-driven triggers)
- **v1.4.0** — Phase 2 (extended catalog)
- **v1.5.0** — Phase 3 (parametric animations)
- **v2.0.0** — Phase 4+ (major features, potential breaking changes)

---

## Success Metrics

✅ **Phase 1 Complete** when:
- All trigger types (entrance, hover, click, loop) tested and documented
- Per-element state prevents double-wiring
- Waffl can consume the new API

✅ **Phase 2 Complete** when:
- All requested animation types implemented and shipped in CSS
- Animation registry updated
- Documentation reflects new catalog

✅ **Phase 3 Complete** when:
- CSS variables used throughout keyframes
- Direction and parameterization work across animation types
- Single SCSS output includes all variants

✅ **Phase 4 Complete** when:
- Waffl successfully uses doubledash animations via `data-logic`
- Zero custom animation CSS in waffl
- Bundle size reduced (CSS consolidation)

---

## Appendix: Animation Mapping Reference

### Waffl → Doubledash Animation Names

| Waffl Type | Doubledash Type | Notes |
|------------|-----------------|-------|
| `fade` | `fadeIn` | Entrance only |
| `slide` | `slideIn` (+ direction) | Directional |
| `reveal` | `reveal` | Scaleх wipe |
| `expand` | `expand` | Scale from small |
| `grow` | `grow` | Scale from zero |
| `shrink` | `shrink` | Scale from large |
| `bounce` | `bounce` | Existing attention |
| `blur` | `blur` | New morphing |
| `flip` | `flip` / `flipX` / `flipY` | New transforming |
| `spin` | `spin` | New transforming |
| `pulse` | `pulse` | Existing attention (loop) |
| `breath` | `breath` | New looping |
| `wiggle` | `wiggle` | New looping |
| `poke` | `poke` | New looping |
| `flash` | `flash` | Existing attention (loop) |
| `swing` | `swing` | Existing attention (loop) |

---

## Questions & Next Steps

1. **Priority:** Should Phase 1 (event triggers) or Phase 2 (catalog) be implemented first?
2. **Naming:** Are the proposed animation names intuitive? Any changes?
3. **CSS approach:** Bundle animations together or allow per-animation imports?
4. **Breaking changes:** Acceptable for v2.0, or maintain strict backward compatibility?
5. **Timeline:** Can phases be parallelized?

---

**Document Version:** 1.0  
**Last Updated:** November 26, 2025  
**Author:** AI Pair Programmer  
**Status:** Ready for stakeholder review
