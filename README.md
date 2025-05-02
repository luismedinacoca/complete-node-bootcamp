# Lecture 011: Creating a Simple Web Server

1. Delete everything and coome back for server: 

2. Add in top code space:
```js
const http = require('http')
```
3. Create a server:
```js
const server = http.createServer( (req, res) => {
    res.end('Hello from the server!');
})
```

4. Call the server with the listen method, add its port number:
```js
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
```

5. Print from console the request from step 3:
```js
const server = http.createServer( (req, res) => {
    console.log(req);
    res.end('Hello from the server!');
})
```