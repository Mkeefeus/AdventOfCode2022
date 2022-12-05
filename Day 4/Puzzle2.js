const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

let overlap = 0

Number.prototype.inRange = function (a, b) {
    return this >= a && this <= b;
};

input.forEach((line) => {
    const pair = line.split(',')
    pair.forEach((minMax, index) => {
        pair[index] = minMax.split('-')
    })
    const min1 = Number(pair[0][0])
    const max1 = Number(pair[0][1])
    const min2 = Number(pair[1][0])
    const max2 = Number(pair[1][1])
    if ((min1.inRange(min2, max2) || max1.inRange(min2, max2)) || (min2.inRange(min1, max1) || max2.inRange(min1, max1))) {
        overlap++
    }

})
console.log(overlap)