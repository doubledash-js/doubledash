# Double Dash

Double Dash is simple utility library meant to help transition people off of jQuery.

## Installation

`npm install @foragefox/doubledash`

## Usage

`import __ from '@foragefox/doubledash';`

## Categories

We orginiaze our functions into categories:

*   animate
*   dom
*   event
*   form
*   lang
*   location
*   size
*   template

## Namespace structure

The name space is broken down by the library, category and function name.

```
{library}.{category}.{function}
```

eg.

```js
__.dom.parents(element, target)
```

library  = \__\
category = dom\
function = parents

## Documentation

Find our docs [here](docs/)


| [Animate](docs/animate.md)                            | [Dom](docs/dom.md)                 | [Event](docs/event.md)             | [Lang](docs/lang.md)                      | [Location](docs/location.md)            |
| ----------------------------------------------------- | ---------------------------------- | ---------------------------------- | ----------------------------------------- | --------------------------------------- |
| [animate()](docs/animate.md#core-animation-function)  | [after()](docs/dom.md#after)       | [off()](docs/event.md#off)         | [escapeHtml()](docs/lang.md#escapeHtml)   | [offset()](docs/location.md#offset)     |
| [onClick()](docs/animate.md#onclick)                  | [append()](docs/dom.md#append)     | [on()](docs/event.md#on)           | [extend()](docs/lang.md#extend)           | [position()](docs/location.md#position) |
| [onHover()](docs/animate.md#onhover)                  | [before()](docs/dom.md#before)     | [once()](docs/event.md#once)       | [isArray()](docs/lang.md#isArray)         |                                         |
| [onEntrance()](docs/animate.md#onentrance)            | [children()](docs/dom.md#children) | [trigger()](docs/event.md#trigger) | [isBoolean()](docs/lang.md#isBoolean)     |                                         |
| [onLoop()](docs/animate.md#onloop)                    | [clone()](docs/dom.md#clone)       |                                    | [isEmpty()](docs/lang.md#isEmpty)         |                                         |
| [blur()](docs/animate.md#blur)                        | [closest()](docs/dom.md#closest)   |                                    | [isFunction()](docs/lang.md#isFunction)   |                                         |
| [bounce()](docs/animate.md#bounce)                    | [contains()](docs/dom.md#contains) |                                    | [isJson()](docs/lang.md#isJson)           |                                         | 
| [bounceIn()](docs/animate.md#bouncein)                | [create()](docs/dom.md#create)     |                                    | [isNull()](docs/lang.md#isNull)           |                                         |
| [bounceOut()](docs/animate.md#bounceout)              | [empty()](docs/dom.md#empty)       |                                    | [isNumber()](docs/lang.md#isNumber)       |                                         |
| [breath()](docs/animate.md#breath)                    | [find()](docs/dom.md#find)         |                                    | [isObject()](docs/lang.md#isObject)       |                                         |
| [expand()](docs/animate.md#expand)                    | [findOne()](docs/dom.md#findOne)   |                                    | [isRegExp()](docs/lang.md#isRegExp)       |                                         |
| [fadeIn()](docs/animate.md#fadein)                    | [hide()](docs/dom.md#hide)         |                                    | [isSet()](docs/lang.md#isSet)             |                                         |
| [fadeOut()](docs/animate.md#fadeout)                  | [next()](docs/dom.md#next)         |                                    | [isString()](docs/lang.md#isString)       |                                         |
| [flash()](docs/animate.md#flash)                      | [parents()](docs/dom.md#parents)   |                                    | [isUndefined()](docs/lang.md#isUndefined) |                                         |
| [flip()](docs/animate.md#flip)                        | [prepend()](docs/dom.md#prepend)   |                                    |
| [grow()](docs/animate.md#grow)                        | [prev()](docs/dom.md#prev)         |                                    |
| [heartBeat()](docs/animate.md#heartbeat)              | [remove()](docs/dom.md#remove)     |                                    |
| [jello()](docs/animate.md#jello)                      | [show()](docs/dom.md#show)         |                                    |
| [poke()](docs/animate.md#poke)                        | [siblings()](docs/dom.md#siblings) |                                    |
| [pulse()](docs/animate.md#pulse)                      | [toggle()](docs/dom.md#toggle)     |                                    |
| [reveal()](docs/animate.md#reveal)                    |                                    |                                    |
| [rotateIn()](docs/animate.md#rotatein)                |                                    |                                    |
| [rotateOut()](docs/animate.md#rotateout)              |                                    |                                    |
| [rubberBand()](docs/animate.md#rubberband)            |                                    |                                    |
| [shake()](docs/animate.md#shake)                      |                                    |                                    |
| [shrink()](docs/animate.md#shrink)                    |                                    |                                    |
| [slideIn()](docs/animate.md#slidein)                  |                                    |                                    |
| [slideOut()](docs/animate.md#slideout)                |                                    |                                    |
| [spin()](docs/animate.md#spin)                        |                                    |                                    |
| [swing()](docs/animate.md#swing)                      |                                    |                                    |
| [tada()](docs/animate.md#tada)                        |                                    |                                    |
| [wiggle()](docs/animate.md#wiggle)                    |                                    |                                    |
| [wobble()](docs/animate.md#wobble)                    |                                    |                                    |
| [zoomingIn()](docs/animate.md#zoomingin)              |                                    |                                    |
| [zoomingOut()](docs/animate.md#zoomingout)            |                                    |                                    |

| [Size](docs/size.md)                      | [Template](docs/template.md)            |
| ----------------------------------------- | --------------------------------------- |
| [width()](docs/size.md#width)             | [supplant()](docs/template.md#supplant) |
| [outerWidth()](docs/size.md#outerWidth)   |                                         |
| [setWidth()](docs/size.md#setWidth)       |                                         |
| [height()](docs/size.md#height)           |                                         |
| [outerHeight()](docs/size.md#outerHeight) |                                         |
| [setHeight()](docs/size.md#setHeight)     |                                         |

## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"