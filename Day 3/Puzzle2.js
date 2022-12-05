const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');

function isUpperCase(char) {
    return char == char.toUpperCase()
}

const priorities = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
}

let total = 0
let currArry = []
input.forEach((line) =>{
    currArry.push(line)
    if (currArry.length == 3) {
        let duplicate = ''
        const charsToCheck = currArry[0].split('')
        for (i=0; i<charsToCheck.length; i++) {
            let char = charsToCheck[i]
            if (currArry[1].includes(char) && currArry[2].includes(char)){
                duplicate = char
                break
            }
        }
        if (isUpperCase(duplicate)) {
            total += 26 + priorities[duplicate.toLowerCase()]
        } else {
            total += priorities[duplicate]
        }
        currArry = []
    }
})
console.log(total)
