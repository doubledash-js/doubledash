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

| [Animate](docs/animate.md)                 | [Dom](docs/dom.md)                 | [Event](docs/event.md)             | [Form](docs/form.md)                        | [Lang](docs/lang.md)                      | [Location](docs/location.md)            | [Size](docs/size.md)                      | [Template](docs/template.md)            |
| ------------------------------------------ | ---------------------------------- | ---------------------------------- | ------------------------------------------- | ----------------------------------------- | --------------------------------------- | ----------------------------------------- | --------------------------------------- |
| [animation()](docs/animate.md#animation)   | [after()](docs/dom.md#after)       | [off()](docs/event.md#off)         | [parseForm()](docs/form.md#parseForm)       | [escapeHtml()](docs/lang.md#escapeHtml)   | [offset()](docs/location.md#offset)     | [width()](docs/size.md#width)             | [supplant()](docs/template.md#supplant) |
| [bounce()](docs/animate.md#bounce)         | [append()](docs/dom.md#append)     | [on()](docs/event.md#on)           | [populateForm()](docs/form.md#populateForm) | [extend()](docs/lang.md#extend)           | [position()](docs/location.md#position) | [outerWidth()](docs/size.md#outerWidth)   |                                         |
| [bounceIn()](docs/animate.md#bounceIn)     | [before()](docs/dom.md#before)     | [once()](docs/event.md#once)       |                                             | [isArray()](docs/lang.md#isArray)         |                                         | [setWidth()](docs/size.md#setWidth)       |                                         |
| [bounceOut()](docs/animate.md#bounceOut)   | [children()](docs/dom.md#children) | [trigger()](docs/event.md#trigger) |                                             | [isBoolean()](docs/lang.md#isBoolean)     |                                         | [height()](docs/size.md#height)           |                                         |
| [fadeIn()](docs/animate.md#fadeIn)         | [clone()](docs/dom.md#clone)       |                                    |                                             | [isEmpty()](docs/lang.md#isEmpty)         |                                         | [outerHeight()](docs/size.md#outerHeight) |                                         |
| [fadeOut()](docs/animate.md#fadeOut)       | [closest()](docs/dom.md#closest)   |                                    |                                             | [isFunction()](docs/lang.md#isFunction)   |                                         | [setHeight()](docs/size.md#setHeight)     |                                         |
| [flash()](docs/animate.md#flash)           | [contains()](docs/dom.md#contains) |                                    |                                             | [isJson()](docs/lang.md#isJson)           |                                         |                                           |                                         |
| [heartBeat()](docs/animate.md#heartBeat)   | [create()](docs/dom.md#create)     |                                    |                                             | [isNull()](docs/lang.md#isNull)           |                                         |                                           |                                         |
| [jello()](docs/animate.md#jello)           | [empty()](docs/dom.md#empty)       |                                    |                                             | [isNumber()](docs/lang.md#isNumber)       |                                         |                                           |                                         |
| [pulse()](docs/animate.md#pulse)           | [find()](docs/dom.md#find)         |                                    |                                             | [isObject()](docs/lang.md#isObject)       |                                         |                                           |                                         |
| [rotateIn()](docs/animate.md#rotateIn)     | [findOne()](docs/dom.md#findOne)   |                                    |                                             | [isRegExp()](docs/lang.md#isRegExp)       |                                         |                                           |                                         |
| [rotateOut()](docs/animate.md#rotateOut)   | [hide()](docs/dom.md#hide)         |                                    |                                             | [isSet()](docs/lang.md#isSet)             |                                         |                                           |                                         |
| [rubberBand()](docs/animate.md#rubberBand) | [next()](docs/dom.md#next)         |                                    |                                             | [isString()](docs/lang.md#isString)       |                                         |                                           |                                         |
| [shake()](docs/animate.md#shake)           | [parents()](docs/dom.md#parents)   |                                    |                                             | [isUndefined()](docs/lang.md#isUndefined) |                                         |                                           |                                         |
| [slideIn()](docs/animate.md#slideIn)       | [prepend()](docs/dom.md#prepend)   |                                    |                                             |                                           |                                         |                                           |                                         |
| [slideOut()](docs/animate.md#slideOut)     | [prev()](docs/dom.md#prev)         |                                    |                                             |                                           |                                         |                                           |                                         |
| [swing()](docs/animate.md#swing)           | [remove()](docs/dom.md#remove)     |                                    |                                             |                                           |                                         |                                           |                                         |
| [tada()](docs/animate.md#tada)             | [show()](docs/dom.md#show)         |                                    |                                             |                                           |                                         |                                           |                                         |
| [wobble()](docs/animate.md#wobble)         | [siblings()](docs/dom.md#siblings) |                                    |                                             |                                           |                                         |                                           |                                         |
| [zoomingIn()](docs/animate.md#zoomingIn)   | [toggle()](docs/dom.md#toggle)     |                                    |                                             |                                           |                                         |                                           |                                         |
| [zoomingOut()](docs/animate.md#zoomingOut) |                                    |                                    |                                             |                                           |                                         |                                           |                                         |

    
## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"