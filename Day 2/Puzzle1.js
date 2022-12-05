const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

const map = {
    "X": {
        "C": 6,
        "A": 3,
        "B": 0,
        "bonus": 1
    },
    "Y": {
        "A": 6,
        "B": 3,
        "C": 0,
        "bonus": 2
    },
    "Z": {
        "B": 6,
        "C": 3,
        "A": 0,
        "bonus": 3
    }
}

let total = 0
input.forEach((pair) => {
    let match = pair.split(" ")
    total += map[match[1]][match[0]] + map[match[1]]["bonus"]
})

console.log(total)