const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

for (i = 0; i < input.length; i++) {
    let letters = [input[i], input[i + 1], input[i + 2], input[i + 3]]
    if (!hasDuplicates(letters)) {
        console.log(letters, i + 4)
        return
    }
}