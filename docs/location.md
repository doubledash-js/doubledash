# Location Functions

## offset

The `offset()` function gets the current coordinates of the element relative to the document.

```js
__.location.offset(element);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
<br>
<br>

## position

The `position()` function gets the current coordinates of the element relative to the offset parent.

```js
__.location.position(element, relativeToViewport);
```

#### Parameters

*   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)**
*   `relativeToViewport` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
<br>
<br>
