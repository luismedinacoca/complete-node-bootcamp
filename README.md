# Lecture 007 - Using Modules 1: Core Modules

1. Create an `index.js` file
2. Add the following code:
```js
const hello = 'Hello World!';
console.log(hello);
```
3. In order to execute from terminal, run:
```bash
node index.js
```
4. Expected result:
```text
'Hello World!'
```

5. Add the following code, in order to get access with File System to write and read files:
```js
const fs = require('fs');
```