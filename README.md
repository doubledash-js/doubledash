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

## Testing

Before running `npm run test`, make sure you add the temporary option in the package.json: "type": "module"