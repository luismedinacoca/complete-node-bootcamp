const fs = require('fs');

/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: \n\n${textIn}.\n\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
*/

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