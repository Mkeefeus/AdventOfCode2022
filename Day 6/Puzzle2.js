const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

for (i = 0; i < input.length; i++) {
    let letters = []
    for (j = 0; j < 14; j++) {
        letters.push(input[i+j])
    }
    if (!hasDuplicates(letters)) {
        console.log(letters, i + 14)
        return
    }
}