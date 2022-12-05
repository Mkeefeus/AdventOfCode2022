const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

let fullyContained = 0

input.forEach((line) => {
    const pair = line.split(',')
    pair.forEach((minMax, index) => {
        pair[index] = minMax.split('-')
    })
    const min1 = Number(pair[0][0])
    const max1 = Number(pair[0][1])
    const min2 = Number(pair[1][0])
    const max2 = Number(pair[1][1])
    if ((min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1)) {
        fullyContained++
    }

})
console.log(fullyContained)