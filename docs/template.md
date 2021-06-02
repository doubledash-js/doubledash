# Templates

DoubleDash template is a simple templating language.

```js
__.template.compile(template, json);
```

#### Parameters

*   `template` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
*   `json` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**  
<br>
<br>

## Overview

It uses a template and an input object to generate HTML or other text formats. DoubleDash templates look like regular text with embedded expressions.

```html
<p>{{firstname}} {{lastname}}</p>
```

A DoubleDash template expression is a `{{`, some contents, followed by a `}}`. When the template is executed, these expressions are replaced with values from an input object.
<br>
<br>

## Expressions
DoubleDash template expressions are the basic unit of a DoubleDash template. You can use them alone in a `{{expression}}`, pass them to a template token.
<br>
<br>

### Basic Usage

DoubleDash template expressions are some contents enclosed by double curly braces `{{}}`. In the below template, firstname is a variable that is enclosed by double curly braces, which is said to be an expression.

```html
<p>{{firstname}} {{lastname}}</p>
```

If the below input object is applied to the template
```js
{
  firstname: "Jimmy",
  lastname: "Kash",
}
```

Expressions are compiled to produce the output as follows:
```html
<p>Jimmy Kash</p>
```
<br>
<br>

### Path expressions

DoubleDash template expressions can also be dot-separated paths.

```html
{{person.firstname}} {{person.lastname}}
```

This expression looks up the person property in the input object and in turn looks up the firstname and lastname property within the person object.

Pass the below input object to the template
```js
{
  person: {
    firstname: "Yehuda",
    lastname: "Katz",
  },
}
```

Output will be generated as below
```html
Jimmy Kash
```
<br>
<br>

### HTML-escaping

In DoubleDash template, the values returned by the {{expression}} are HTML-escaped. Say, if the expression contains `<`, then the returned HTML-escaped output is genarated as &lt;. If you don't want DoubleDash templates to escape a value, use the `&` token, {{&:

In the below template, you can learn how to produce the HTML escaped and raw output.

```html
raw: {{{specialChars}}}
html-escaped: {{specialChars}}
Pass the special characters to the template
```

```
{ specialChars: "& < > \" ' / ` =" }
```
Expressions enclosed by `&` token, (`{{&`): produce the raw output. Otherwise, HTML-escaped output is generated as below.

```
raw: & < > " ' ` =
html-escaped: &amp; &lt; &gt; &quot; &#39; &#x2F; &#x60; &#x3D;
```
<br>
<br>

## Built-in Helpers

### if

You can use the if helper to conditionally render a block. If its argument returns false, undefined, null, "", 0, or [].

```html
<div class="entry">
  {{if (author) }}
    <h1>{{firstName}} {{lastName}}</h1>
  {{endif}}
</div>
```

When you pass the following input to the above template
```js
{
  author: true,
  firstName: "Jimmy",
  lastName: "Kash",
}
```

This will produce the result as below:
```html
  <div class="entry">
    <h1>Jimmy Kash</h1>
  </div>
```

If the input is an empty JSONObject {}, then author will become undefined and if condition fails, resulting in the output as follow:
```html
<div class="entry"></div>
```

When using a if expression, you can specify a template section to run if the expression returns a falsy value.
```html
<div class="entry">
  {{if (author) }}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{endif}}
</div>
```

You can also specify multiple conditions with elseif.
```html
<div class="entry">
  {{if (author) }}
    <h1>{{firstName}} {{lastName}}</h1>
  {{elseif (firstName == "Jimmy") }}
    <h1>Unknown Author</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{endif}}
</div>
```
<br>
<br>

### for

You can iterate over a list using the for token. Inside the block, you can use this to reference the element being iterated over.
```html
<ul class="people_list">
  {{for (let i = 0; i < people.length; i++) }}
    <li>{{people[i]}}</li>
  {{endfor}}
</ul>
```

when used with this context:
```js
{
  people: [
    "Jimmy",
    "Kat",
    "Phoenix",
    "Iggy"
  ],
}
```

will result in:
```html
  <ul class="people_list">
    <li>Demetri</li>
    <li>Kat</li>
    <li>Phoenix</li>
    <li>Iggy</li>
  </ul>
```

You can also use `{{break}}` and `{{continue}}` in your for loops.