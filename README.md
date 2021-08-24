# Double Dash

Double Dash is simple utility library meant to help transition people off of jQuery.

## Installation

`npm install @foragefox/doubledash`

## Usage

`import __ from '@foragefox/doubledash';`

## Categories

We orginiaze our functions into categories:

*   lang
*   dom
*   event
*   template
*   animate
*   form

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

| [Animate](docs/animate.md)                 | [Dom](docs/dom.md)                 | [Event](docs/event.md)             | [Form](docs/form.md)                        |
| ------------------------------------------ | ---------------------------------- | ---------------------------------- | ------------------------------------------- |
| [animation()](docs/animate.md#animation)   | [after()](docs/dom.md#after)       | [off()](docs/event.md#off)         | [parseForm()](docs/form.md#parseForm)       |
| [bounce()](docs/animate.md#bounce)         | [append()](docs/dom.md#append)     | [on()](docs/event.md#on)           | [populateForm()](docs/form.md#populateForm) |
| [bounceIn()](docs/animate.md#bounceIn)     | [before()](docs/dom.md#before)     | [once()](docs/event.md#once)       |                                             |
| [bounceOut()](docs/animate.md#bounceOut)   | [children()](docs/dom.md#children) | [trigger()](docs/event.md#trigger) |                                             |
| [fadeIn()](docs/animate.md#fadeIn)         | [clone()](docs/dom.md#clone)       |                                    |                                             |
| [fadeOut()](docs/animate.md#fadeOut)       | [closest()](docs/dom.md#closest)   |                                    |                                             |
| [flash()](docs/animate.md#flash)           | [contains()](docs/dom.md#contains) |                                    |                                             |
| [heartBeat()](docs/animate.md#heartBeat)   | [create()](docs/dom.md#create)     |                                    |                                             |
| [jello()](docs/animate.md#jello)           | [empty()](docs/dom.md#empty)       |                                    |                                             |
| [pulse()](docs/animate.md#pulse)           | [find()](docs/dom.md#find)         |                                    |                                             |
| [rotateIn()](docs/animate.md#rotateIn)     | [findOne()](docs/dom.md#findOne)   |                                    |                                             |
| [rotateOut()](docs/animate.md#rotateOut)   | [hide()](docs/dom.md#hide)         |                                    |                                             |
| [rubberBand()](docs/animate.md#rubberBand) | [next()](docs/dom.md#next)         |                                    |                                             |
| [shake()](docs/animate.md#shake)           | [parents()](docs/dom.md#parents)   |                                    |                                             |
| [slideIn()](docs/animate.md#slideIn)       | [prepend()](docs/dom.md#prepend)   |                                    |                                             |
| [slideOut()](docs/animate.md#slideOut)     | [prev()](docs/dom.md#prev)         |                                    |                                             |
| [swing()](docs/animate.md#swing)           | [remove()](docs/dom.md#remove)     |                                    |                                             |
| [tada()](docs/animate.md#tada)             | [show()](docs/dom.md#show)         |                                    |                                             |
| [wobble()](docs/animate.md#wobble)         | [siblings()](docs/dom.md#siblings) |                                    |                                             |
| [zoomingIn()](docs/animate.md#zoomingIn)   | [toggle()](docs/dom.md#toggle)     |                                    |                                             |
| [zoomingOut()](docs/animate.md#zoomingOut) |                                    |                                    |                                             |

| [Lang](docs/lang.md)                      | [Location](docs/location.md)            | [Size](docs/size.md)                      | [Template](docs/template.md)            |
| ----------------------------------------- | --------------------------------------- | ----------------------------------------- | --------------------------------------- |
| [escapeHtml()](docs/lang.md#escapeHtml)   | [offset()](docs/location.md#offset)     | [width()](docs/size.md#width)             | [supplant()](docs/template.md#supplant) |
| [extend()](docs/lang.md#extend)           | [position()](docs/location.md#position) | [outerWidth()](docs/size.md#outerWidth)   |                                         |
| [isArray()](docs/lang.md#isArray)         |                                         | [setWidth()](docs/size.md#setWidth)       |                                         |
| [isBoolean()](docs/lang.md#isBoolean)     |                                         | [height()](docs/size.md#height)           |                                         |
| [isEmpty()](docs/lang.md#isEmpty)         |                                         | [outerHeight()](docs/size.md#outerHeight) |                                         |
| [isFunction()](docs/lang.md#isFunction)   |                                         | [setHeight()](docs/size.md#setHeight)     |                                         |
| [isJson()](docs/lang.md#isJson)           |                                         |                                           |                                         |
| [isNull()](docs/lang.md#isNull)           |                                         |                                           |                                         |
| [isNumber()](docs/lang.md#isNumber)       |                                         |                                           |                                         |
| [isObject()](docs/lang.md#isObject)       |                                         |                                           |                                         |
| [isRegExp()](docs/lang.md#isRegExp)       |                                         |                                           |                                         |
| [isSet()](docs/lang.md#isSet)             |                                         |                                           |                                         |
| [isString()](docs/lang.md#isString)       |                                         |                                           |                                         |
| [isUndefined()](docs/lang.md#isUndefined) |                                         |                                           |                                         |

## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"