# Dom Functions

## after

The `after()` function inserts the specified `element` after the specified `target`.

```js
__.dom.after(element, target);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `target` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## append

The `append()` function inserts the specified `element` at the end of the specified `target`.

```js
__.dom.after(element, target);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `target` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## before

The `before()` function inserts the specified `element` in front of (before) the specified `target`.

```js
__.dom.before(element, target);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `target` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## children

The `children()` function returns all direct children of the specified `element`. Optional a `selector` can be added to narrow down your returned results.

```js
__.dom.children(element, selector);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `undefined`)

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
<br>
<br>

## clone

The `clone()` function makes a copy of the specified `element`, including child nodes, text and attributes.

```js
__.dom.clone(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## contains

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `child` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Element](https://developer.mozilla.org/docs/Web/API/Element))** 

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 
<br>
<br>

## create

The `create()` function creates the HTML element specified by the `tag`. Optional `attributes` and `text` can be added.

```js
__.dom.create(tag, attributes, text);
```

#### Parameters

*   `tag` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `attributes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
*   `text` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `undefined`)

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## index

The `index()` function returns the index position of the specified `element` relative to the element siblings.

```js
__.dom.index(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
<br>
<br>

## empty

The `empty()` function removes all child nodes and content from the specified `element`.

```js
__.dom.empty(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## find

The `find()` function allow you to select and manipulate HTML elements. Optional element to start your search on, by default it uses the entire document.

Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.

```js
__.dom.find(selector, element);
```

#### Parameters

*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**  (optional, default `document.documentElement`)

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
<br>
<br>

## findOne

The `findOne()` function is similar to `find()` but will only return a single element. Optional element to start your search on, by default it uses the entire document.

Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors.

```js
__.dom.findOne(selector, element);
```

#### Parameters

*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**  (optional, default `document.documentElement`)

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## next

The `next()` function returns the next sibling element of the specified `element`. Optionally a `selector` can be added to be more specific.

Sibling elements are elements that share the same parent.

```js
__.dom.next(element, selector);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `undefined`)

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## parents

The `parents()` function returns all ancestor elements of the specified `element`. Optionally add a `selector` to match elements against.

An ancestor is a parent, grandparent, great-grandparent, and so on.

```js
__.dom.parents(element, selector);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `undefined`)

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
<br>
<br>

## prepend

The `prepend()` function inserts the specified `element` at the beginning of the specified `target`.

```js
__.dom.prepend(element, target);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `target` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## prev

The `prev()` function returns the previous sibling element of the specified `element`.  Optionally a `selector` can be added to be more specific.

Sibling elements are elements that share the same parent.

```js
__.dom.prev(element, selector);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
*   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `undefined`)

Returns **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## remove

The `remove()` function removes the specified `element` and its child elements.

```js
__.dom.remove(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
<br>
<br>

## siblings

The `siblings()` function returns all sibling elements of the specified `element`.

Sibling elements are elements that share the same parent.

```js
__.dom.siblings(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
