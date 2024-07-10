## hashwork
Generate a simple ASCII artwork with strings. :art:

```js
await Hashwork("Hello, World!", {
  wrap: true,
  charset: // ...
});
```
```
charset: Hashwork.CHARSET_RAIN
+----------+
| ,,       |
| ,,       |
|, ,  ,    |
|,      , ,|
|   ,     ,|
+----------+
```
```
charset: Hashwork.CHARSET_EGGS
+----------+
|_00_______|
|_00_______|
|0_0__0____|
|0______0_0|
|___0_____0|
+----------+
```

## Installation :package:

Install hashwork using npm and import it with `require`.

```sh
npm install hashwork
```
```js
const Hashwork = require("hashwork");
```

If you're using vanilla javascript, download the [hashwork.js](hashwork.js) file and import it or use jsdelivr cdn:
```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/hashwork/hashwork.js"></script>
```

After importing, hashwork will appear on `window.Hashwork`.

## Usage :books:

Hashwork accepts two arguments: the string that generates the artwork, and a configuration object.
```js
await Hashwork(String, Object?);
```

Example usage:
```js
await Hashwork("Hello, World");
// This will return a list
// of string
```

## Configuration
Configuration is optional and it should be an object.

### Algorithm
This configuration changes the hashing algorithm. It is `SHA-1` by default.

```js
await Hashwork("Hello, World", {
  algorithm: "SHA-256"
});
```

### Height
This configuration changes the column size. It is 5 by default. Take note that the height is limited depending on the generated hash buffer.

```js
await Hashwork("Hello, World", {
  height: 7
});
```

### Width
This configuration changes the row size. It is 10 by default. Take note that the width is limited depending on the sine result of the hash.

```js
await Hashwork("Hello, World", {
  width: 10
});
```

### Wrap
This configuration allows hashwork to wrap the artwork into a frame. It is not allowed by default.

Without wrap, Hashwork returns a list of string.

On the other hand, using wrap will produce a string like this:

```
+----------+
|          |
| Artwork  |
| Here     |
|          |
|          |
+----------+
```

### Charset

This configuration changes the characters that makes the artwork. It is `Hashwork.CHARSET_DEFAULT` by default. Take note that this should be an array of string that has only one character in it.

```js
await Hashwork("Hello, World", {
  charset: ["0", "1"]
});
```

## Built-in Charset :fallen_leaf:
Hashwork has 15 built-in charset that can be accessed through the variable `Hashwork.CHARSET_<NAME>`.

### Default
```js
// Variable
Hashwork.CHARSET_DEFAULT

// List
[" ", " ", " ", ".", "x", "+"]

// Example
`
+----------+
|x.    +.. |
|    x x+. |
|.  .x+ +  |
|.  +..    |
|..     x  |
+----------+
`
```
