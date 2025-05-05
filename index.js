const fs = require('fs');
const http = require('http')
const url = require('url')

/********************************** FILES **********************************/
/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: \n\n${textIn}.\n\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');

// Non Blocking, Asynchronous way:
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR! 💥');
    console.log(`reading file: from './txt/${data1}.txt'`);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            fs.readFile('./txt/final.txt', 'utf-8',(err, data4) => {
                console.log(data4);
                fs.writeFile('./txt/final.txt', `${data4}\n${data2}\n${data3}`, 'utf-8', err => {
                    console.log('Your file has been written 😁');
                })
            })
        })
    })
})
console.log("Will read file!");
*/


/********************************** SERVER **********************************/

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer( (req, res) => {
    //console.log(req.url);
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end("This is the OVERVIEW page");
    } else if(pathName === '/product'){
        res.end("This is the PRODUCT page");
    } else if(pathName === '/api'){
        /*
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data);
            console.log("productData: ", productData)
            res.writeHead(200, {
                "Content-type":"application/json",
            });
            res.end(data);
        }) //res.end("API");
        */
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(data);

    } else {
        //send headers
        res.writeHead(404, {
            "Content-type":"text/html",
            'my-own-header': 'hello world',
        });
        res.end('<h1>Page not Found!</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})
