// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
let retStr = " ";
for(let i = 1; i < n; i++){
    for(let j = i; j < n; j++){
        retStr += j.toString();
    }
    retStr += "/n";
}
console.log(retStr)
return retStr;

};

module.exports = { floydsTriangle };
