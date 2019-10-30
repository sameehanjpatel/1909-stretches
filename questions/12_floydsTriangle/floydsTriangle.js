// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
const result = [];
let curNum = 1;
for(let i = 0; i < n; i++){
    const currentRow = []
    for(let j = 0; j <= i; j++){
        currentRow.push(curNum);
        curNum++;
    }
    result.push(currentRow.join{""});
}
return result.join("/n");

};

module.exports = { floydsTriangle };
