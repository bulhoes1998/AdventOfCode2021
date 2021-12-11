const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');
let listData = data.split(/\n/);

const toNumbers = arr => arr.map(Number);
listData = toNumbers(listData);

const somaArray = function (arr, winLen) {
    for (var pos = 0; pos < arr.length - winLen + 1; pos++) {
        for (var j = 1; j < winLen; j++) {
            arr[pos] = arr[pos] + arr[pos + j]
        }
    }
    for(var i = 1; i < winLen;i++) arr.pop();

    return arr;
}

const checkIncrease = function (arr) {
    let x = 0;
    let i = 1;
    while (i < arr.length) {
        arr[i - 1] < arr[i] ? x += 1 : x = x;
        i += 1;
    }
    return x;
}

console.log(checkIncrease(somaArray(listData, 3)));