# Lecture 013: 

1. In top:
```js
const http = require('http')
const url = require('url')
```

2. Add a new condition:
```js
else if(pathName === '/api'){
    fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8', (err, data) => {
        const productData = JSON.parse(data);
        console.log("productData: ", productData)
        res.writeHead(200, {
            "Content-type":"application/json",
        });
        res.end(data);
    }) 
    //res.end("API");
}
```

3. Modify this condition in order to see the json file in the page:

    3.1 First, add the following data:
    ```js
    const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
    const dataObj = JSON.parse(data);
    ```
    3.2 Then modify our condition:
    ```js
    else if(pathName === '/api'){
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);
    } 
    ```