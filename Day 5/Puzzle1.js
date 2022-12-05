const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .split('\r\n');

// Create arrays
const numOfArrays = (input[0].length / 4)
let crates = []
for (i=0; i<numOfArrays; i++) {
    crates[i] = []
}
input.forEach((line) => {
    if (line.includes('move')) {
        let lineArr = line.split(' ')
        let nums = []
        lineArr.forEach((item) => {
            if ((Number(item))){
                nums.push(item)
            }
        })
        const amount = Number(nums[0])
        const from = Number(nums[1]) - 1
        const to = Number(nums[2]) - 1
        for (i=0; i< amount; i++) {
            let val = crates[from][crates[from].length - 1]
            crates[from].pop()
            crates[to].push(val)
        }
    } else if (!(line.startsWith(" 1"))) {
        for (i=0; i < line.length; i++) {
            if (line[i] =='[') {
                const subarry = Math.floor(i / 4)
                crates[subarry].unshift(line[i+1])
            }
        }
    }
})
let finalString = ''
for (i=0; i < crates.length; i++) {
    finalString = finalString + crates[i][crates[i].length - 1]
}
console.log(finalString)