
1. Execute:
```bash
npm init
```

2. Importante:

    2.1. `url`: Este es un módulo incorporado en Node.js que proporciona utilidades para trabajar con URLs. Antes de usar `url.parse()`, generalmente necesitarías importar este módulo al principio de tu archivo con algo como const `url = require('url');`.

    2.2. `parse()`: Este es un método del módulo `url` que toma una cadena de URL como entrada y devuelve un objeto que contiene las diferentes partes de esa URL.

    2.3. `req.url`: Esta propiedad del objeto `req` (la solicitud entrante) contiene la parte de la URL que sigue al nombre de dominio. Por ejemplo, si un cliente solicita http://www.example.com/productos?id=123&orden=desc, entonces `req.url` contendría `/productos?id=123&orden=desc`.


# Lecture 019:

1. Open terminal and run:
```bash
npm i slugify
```
    > open package.json file and you will see:
```js
    "dependencies": {
        "slugify": "^1.6.6"
    },
```
2. Open terminal and run:
```bash
npm i nodemon --save-dev
```
    > open package.json file and you will see:
```js
    "devDependencies": {
        "nodemon": "^3.1.10"
    }
```

3. Install globally:
```bash
npm i nodemon --global
```
and for Mac users:
```bash
sudo npm i nodemon --global
```
Execute from terminal:
```bash
nodemon index.js
```

4. create a script command:
```js
  "scripts": {
    "start": "nodemon index.js"
  },
```
now open the terminal and run:
```bash
npm run start
```
