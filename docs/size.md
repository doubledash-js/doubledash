# Size Functions

## height

The `height()` function returns the height of the element.
(element + padding)

```js
__.size.height(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
<br>
<br>

## outerHeight

The `outerHeight()` function returns the outer height of the element. Includes margins if includeMargings is set to true. returns the height of the element.
(element + padding + border) OR (element + padding + border + margin)

```js
__.size.outerHeight(element, includeMargins);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
*   `includeMargins` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** (optional, default `false`)

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
<br>
<br>

## outerWidth

The `outerWidth()` function returns the outer width of the element. Includes margins if includeMargings is set to true. returns the width of the element.
(element + padding + border) OR (element + padding + border + margin)

```js
__.size.outerWidth(element, includeMargins);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
*   `includeMargins` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** (optional, default `false`)

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
<br>
<br>

## setHeight

The `setHeight()` function sets the height of the element.

```js
__.size.setHeight(element, value);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
*   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** | **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** | **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)**

<br>
<br>

## setWidth

The `setWidth()` function sets the height of the element.

```js
__.size.setWidth(element, value);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
*   `value` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** | **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** | **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)**

<br>
<br>

## width

The `width()` function returns the width of the element.
(element + padding)

```js
__.size.width(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** 
<br>
<br>
