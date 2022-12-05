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
input.forEach((line) =>{
    const midpoint = line.length / 2
    const compartments = [line.slice(0, midpoint), line.slice(midpoint)]
    const charsInCompartment1 = compartments[0].split('')
    let duplicate = ''
    for (i=0; i < charsInCompartment1.length; i++) {
        const char = charsInCompartment1[i]
        if (compartments[1].includes(char)) {
            duplicate = char
            break
        }
    }
    if (isUpperCase(duplicate)) {
        total += 26 + priorities[duplicate.toLowerCase()]
    } else {
        total += priorities[duplicate]
    }
})
console.log(total)
