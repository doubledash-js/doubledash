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

<table style="width:100%">
<thead>
<tr>
<th><a href="/doubledash-js/doubledash/blob/main/docs/animate.md">Animate</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/dom.md">Dom</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/event.md">Event</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/form.md">Form</a></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#animation">animation()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#after">after()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/event.md#off">off()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/form.md#parseForm">parseForm()</a></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#bounce">bounce()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#append">append()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/event.md#on">on()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/form.md#populateForm">populateForm()</a></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#bounceIn">bounceIn()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#before">before()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/event.md#once">once()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#bounceOut">bounceOut()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#children">children()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/event.md#trigger">trigger()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#fadeIn">fadeIn()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#clone">clone()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#fadeOut">fadeOut()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#closest">closest()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#flash">flash()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#contains">contains()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#heartBeat">heartBeat()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#create">create()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#jello">jello()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#empty">empty()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#pulse">pulse()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#find">find()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#rotateIn">rotateIn()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#findOne">findOne()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#rotateOut">rotateOut()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#hide">hide()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#rubberBand">rubberBand()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#next">next()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#shake">shake()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#parents">parents()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#slideIn">slideIn()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#prepend">prepend()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#slideOut">slideOut()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#prev">prev()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#swing">swing()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#remove">remove()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#tada">tada()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#show">show()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#wobble">wobble()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#siblings">siblings()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#zoomingIn">zoomingIn()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/dom.md#toggle">toggle()</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/animate.md#zoomingOut">zoomingOut()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table style="width:100%">
<thead>
<tr>
<th><a href="/doubledash-js/doubledash/blob/main/docs/lang.md">Lang</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/location.md">Location</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/size.md">Size</a></th>
<th><a href="/doubledash-js/doubledash/blob/main/docs/template.md">Template</a></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#escapeHtml">escapeHtml()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/location.md#offset">offset()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#width">width()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/template.md#supplant">supplant()</a></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#extend">extend()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/location.md#position">position()</a></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#outerWidth">outerWidth()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isArray">isArray()</a></td>
<td></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#setWidth">setWidth()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isBoolean">isBoolean()</a></td>
<td></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#height">height()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isEmpty">isEmpty()</a></td>
<td></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#outerHeight">outerHeight()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isFunction">isFunction()</a></td>
<td></td>
<td><a href="/doubledash-js/doubledash/blob/main/docs/size.md#setHeight">setHeight()</a></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isJson">isJson()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isNull">isNull()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isNumber">isNumber()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isObject">isObject()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isRegExp">isRegExp()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isSet">isSet()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isString">isString()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><a href="/doubledash-js/doubledash/blob/main/docs/lang.md#isUndefined">isUndefined()</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>


## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"