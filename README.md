## Hashwork
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

### Rain
```js
// Variable
Hashwork.CHARSET_RAIN

// List
[" "," "," "," ",","]

// Example
`
+----------+
|,,     ,  |
|    , , , |
|,  ,,     |
|    ,     |
|,,     ,  |
+----------+
`
```

### Eggs
```js
// Variable
Hashwork.CHARSET_EGGS

// List
["_","_","_","_","0"]

// Example
`
+----------+
|00_____0__|
|____0_0_0_|
|0__00_____|
|____0_____|
|00_____0__|
+----------+
`
```

### Pin
```js
// Variable
Hashwork.CHARSET_PIN

// List
["0","1","2","3","4","5","6","7","8","9"]

// Example
`
+----------+
|4910215938|
|6160404591|
|9129452507|
|3215938602|
|9928726480|
+----------+
`
```

### Sea
```js
// Variable
Hashwork.CHARSET_SEA

// List
["~","~","~","≥","~","~","~"]

// Example
`
+----------+
|~~~~~~~~≥~|
|~~~~~~~~~~|
|~~~~~~~~~~|
|≥~~~~≥~~~~|
|~~~~~~~~~~|
+----------+
`
```

### Huh
```js
// Variable
Hashwork.CHARSET_HUH

// List
[" "," "," "," ","?"]

// Example
`
+----------+
|??     ?  |
|    ? ? ? |
|?  ??     |
|    ?     |
|??     ?  |
+----------+
`
```

### WTF
```js
// Variable
Hashwork.CHARSET_WTF

// List
[" "," "," ","!","?"]

// Example
`
+----------+
|??     ?!!|
|    ? ? ? |
|?  ??     |
|!   ?!!   |
|?? !   ?! |
+----------+
`
```

### Emote
```js
// Variable
Hashwork.CHARSET_EMOTE

// List
[" "," "," ",":","(",")"]

// Example
`
+----------+
|(:    ):: |
|    ( (): |
|:  :() )  |
|:  )::    |
|::     (  |
+----------+
`
```

### Glitter
```js
// Variable
Hashwork.CHARSET_GLITTER

// List
[":",":",":",":","."]

// Example
`
+----------+
|..:::::.::|
|::::.:.:.:|
|.::..:::::|
|::::.:::::|
|..:::::.::|
+----------+
`
```

### Morse
```js
// Variable
Hashwork.CHARSET_MORSE

// List
[".","-","/"]

// Example
`
+----------+
|-.-./-/../|
|.-..-.-/.-|
|.-/.-///.-|
|./-/../../|
|..//-/.-/.|
+----------+
`
```

### Note
```js
// Variable
Hashwork.CHARSET_NOTE

// List
["_","_","_","_","_","a","b","c"]

// Example
`
+----------+
|______a___|
|b_b____a__|
|_____a_a_c|
|___a___b__|
|____c_b___|
+----------+
`
```

### Math
```js
// Variable
Hashwork.CHARSET_MATH

// List
["+","-","*","/","="]

// Example
`
+----------+
|==-+*-+=//|
|---+=+=+=-|
|=-*==+*++*|
|/*-+=//-+*|
|==*/**-=/+|
+----------+
`
```

### Hair
```js
// Variable
Hashwork.CHARSET_HAIR

// List
["|","|","|","!"]

// Example
`
+----------+
|||||||||!||
||||||||||||
||||||||||!|
|!||||!|||||
|||||!||||||
+----------+
`
```

## Under the Hood :robot:

This is how the process done to generate the artwork:

1. Convert the text to a hash (`SHA-1` by default) that produces a list of number.
2. Slice the list by the configuration of height (5 by default).
3. Map each number, get its sine ratio, use its decimal part, and slice it by the configuration of width (10 by default).
4. Map each decimal parts, convert it to string, and split kt by characters.
5. Map each characters, get the character from `charset` by its number (0-9). Modulo by the length of charset if the number is greater than the length of the list.
