# Double Dash

Double Dash is simple utility library meant to help transition people off of jQuery.

## Installation

`npm install @foragefox/doubledash`

## Usage

`import __ from '@foragefox/doubledash';`

#### import individual categories
`import { dom, event } from '@foragefox/doubledash';`

#### import individual functions
`import { find, findOne, isEmpty } from '@foragefox/doubledash';`


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


| [Animate](docs/animate.md)                            | [Dom](docs/dom.md)                 | [Event](docs/event.md)             | [Lang](docs/lang.md)                      | [Location](docs/location.md)            | [Size](docs/size.md)                      | [Template](docs/template.md)            |
| ----------------------------------------------------- | ---------------------------------- | ---------------------------------- | ----------------------------------------- | --------------------------------------- | ----------------------------------------- | --------------------------------------- |
| [animate()](docs/animate.md#core-animation-function)  | [after()](docs/dom.md#after)       | [off()](docs/event.md#off)         | [escapeHtml()](docs/lang.md#escapeHtml)   | [offset()](docs/location.md#offset)     | [width()](docs/size.md#width)             | [supplant()](docs/template.md#supplant) |
| [onClick()](docs/animate.md#onclick)                  | [append()](docs/dom.md#append)     | [on()](docs/event.md#on)           | [extend()](docs/lang.md#extend)           | [position()](docs/location.md#position) | [outerWidth()](docs/size.md#outerWidth)   |                                         |
| [onHover()](docs/animate.md#onhover)                  | [before()](docs/dom.md#before)     | [once()](docs/event.md#once)       | [isArray()](docs/lang.md#isArray)         |                                         | [setWidth()](docs/size.md#setWidth)       |                                         |
| [onEntrance()](docs/animate.md#onentrance)            | [children()](docs/dom.md#children) | [trigger()](docs/event.md#trigger) | [isBoolean()](docs/lang.md#isBoolean)     |                                         | [height()](docs/size.md#height)           |                                         |
| [onLoop()](docs/animate.md#onloop)                    | [clone()](docs/dom.md#clone)       |                                    | [isEmpty()](docs/lang.md#isEmpty)         |                                         | [outerHeight()](docs/size.md#outerHeight) |                                         |
|                                                       | [closest()](docs/dom.md#closest)   |                                    | [isFunction()](docs/lang.md#isFunction)   |                                         | [setHeight()](docs/size.md#setHeight)     |                                         |
|                                                       | [contains()](docs/dom.md#contains) |                                    | [isJson()](docs/lang.md#isJson)           |                                         | 
|                                                       | [create()](docs/dom.md#create)     |                                    | [isNull()](docs/lang.md#isNull)           |                                         |
|                                                       | [empty()](docs/dom.md#empty)       |                                    | [isNumber()](docs/lang.md#isNumber)       |                                         |
|                                                       | [find()](docs/dom.md#find)         |                                    | [isObject()](docs/lang.md#isObject)       |                                         |
|                                                       | [findOne()](docs/dom.md#findOne)   |                                    | [isRegExp()](docs/lang.md#isRegExp)       |                                         |
|                                                       | [hide()](docs/dom.md#hide)         |                                    | [isSet()](docs/lang.md#isSet)             |                                         |
|                                                       | [next()](docs/dom.md#next)         |                                    | [isString()](docs/lang.md#isString)       |                                         |
|                                                       | [parents()](docs/dom.md#parents)   |                                    | [isUndefined()](docs/lang.md#isUndefined) |                                         |
|                                                       | [prepend()](docs/dom.md#prepend)   |                                    |
|                                                       | [prev()](docs/dom.md#prev)         |                                    |
|                                                       | [remove()](docs/dom.md#remove)     |                                    |
|                                                       | [show()](docs/dom.md#show)         |                                    |
|                                                       | [siblings()](docs/dom.md#siblings) |                                    |
|                                                       | [toggle()](docs/dom.md#toggle)     |                                    |











## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"