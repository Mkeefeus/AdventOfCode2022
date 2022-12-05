const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\r\n');


const map = {
    "A": { // Rock
        "X": 0 + 3, // Lose, choose scissors
        "Y": 3 + 1, // Tie, choose rock
        "Z": 6 + 2 // Win, choose paper
    }, 
    "B": { // Paper
        "X": 0 + 1, // Lose, choose rock
        "Y": 3 + 2, // Tie, choose paper
        "Z": 6 + 3 // Win, choose scissors
    },
    "C": { // Scissors
        "X": 0 + 2, // Lose, choose paper
        "Y": 3 + 3, // Tie, choose scissors
        "Z": 6 + 1 // Win, choose rock
    }
}

let total = 0
input.forEach((pair) => {
    let match = pair.split(" ")
    total += map[match[0]][match[1]]
})

console.log(total)