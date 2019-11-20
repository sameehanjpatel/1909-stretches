/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sorted, key) {
    // const returnArr = []
    //iterate through the objects and get keys
    // let keys = []
    // const keys = arr.forEach(item =>
    //     let currentKeys = Object.keys(item);
    //     keys.push(currentKey[0])
    //     )
    // //sort objects by keys
    // keys.sort()
    // //loop through key array and add value from object to return array
    // keys.forEach(
    //     obj
    // )
    //     //I think I should have made a large object with key-name pairs and pushed new keys into return array 
    
    //     return returnArr;

    return arr.sort((a,b)=>{
        if(a[sorted] < b[sorted]){
            return -1
        }
        if (a[sorted] > b[sorted]){
            return 1
        } 
        return 0})
        .map(element => {
        return element[key]})
}

module.exports = { sortOrder };
