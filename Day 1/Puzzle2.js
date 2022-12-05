
const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

console.log(input);



let invs = []
let totals = []
let currIndex = 0

function nextTable() {
    let sum = 0
    invs[currIndex].forEach((value) => {
        sum += Number(value)
    })
    totals[currIndex] = sum
    currIndex++
}

input.forEach((line, index) => {
    invs[currIndex] = invs[currIndex] || [];
    if (line !== '') {
        invs[currIndex].push(line);
        if (index === input.length - 1) {
            nextTable()
        }
    }
    else {
        nextTable()
    }
});
totals.sort(function(a, b){return b-a});
console.log(totals[0] + totals[1] + totals[2])