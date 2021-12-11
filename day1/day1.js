const fs = require('fs');


const data = fs.readFileSync('./input.txt', 'utf-8');
const listData = data.split(/\n/);

let x = 0;
let i = 0;

while( i < listData.length) {
    listData[i-1] < listData[i] ? x += 1 : x = x;
    i += 1;
}

console.log(x)