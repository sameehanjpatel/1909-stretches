function isEqual(obj1, obj2) {
 const keys1 = Object.keys(obj1);
 const keys2 = Object.keys(obj2);
  if(keys1 != keys2){
    return false;
 } 
 for(let i = 0; i<keys.lengthl i++){
   if (obj1[keys1[i]] !== obj2[keys[i]]){
    return false
  }
 }
  return true;
}

module.exports = { isEqual };
