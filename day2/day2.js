const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf-8');
let listData = data.split(/\n/);

let aux = [0,0]
let aux2 = [0,0,0]
const newData = listData.map((arg) => {
    var tempArr = arg.split(" ");
    if(tempArr[0] == 'down') {
        aux[0] += parseInt(tempArr[1]);
    }else if(tempArr[0] == 'up') {
        aux[0] -= parseInt(tempArr[1]);
    }else{
        aux[1] += parseInt(tempArr[1]);
    }
})

const newData2 = listData.map((arg) => {
    var tempArr = arg.split(" ");
    if(tempArr[0] == 'down') {
        aux2[0] += parseInt(tempArr[1]);
    }else if(tempArr[0] == 'up') {
        aux2[0] -= parseInt(tempArr[1]);
    }else{
        aux2[1] += parseInt(tempArr[1]);
        aux2[2] += parseInt(tempArr[1])*aux2[0] 
    }
})

console.log(aux2[1]*aux2[2])