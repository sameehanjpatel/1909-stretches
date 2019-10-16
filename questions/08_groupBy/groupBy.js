function groupBy(arr, attr {
let returnObj = {}
 arr.forEach(i => {
     let currentVal = attr(i);
     if (returnObj[currentVal]){
         returnObj[currentVal].push
    (i) } else{
          returnObj[currentVal] =  [i]
     }

 })
    return returnObj;
}

module.exports = { groupBy };
