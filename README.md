# Lecture 008 - Reading and Writing Files

1. Having these files:
```
01_node_farm/
├── txt/
│   └── append.txt
│   └── final.txt
│   └── input.txt
│   └── read-this.txt
│   └── start.txt
├── index.js
└── README.md
```

2. In the top of the page, add the following code, in order to get access with File System to write and read files:
```js
const fs = require('fs');
```

3. In order to syncronously read a file:
```js
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
```

4.  In order to see from console:
```js
const textOut = `This is what we know about the avocado: \n\n${textIn}.\n\nCreated on ${Date.now()}`;
```

5. In order to syncronously write a file:
```JS
fs.writeFileSync('./txt/output.txt', textOut);
```
But we cannot verify whether this file was or was not created.

Expected file structure:
```
01_node_farm/
├── txt/
│   └── append.txt
│   └── final.txt
│   └── input.txt
│   └── output.txt  // (*)
│   └── read-this.txt
│   └── start.txt
├── index.js
└── README.md
```