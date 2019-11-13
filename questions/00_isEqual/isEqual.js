function isEqual(obj1, obj2) {
<<<<<<< HEAD
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
=======
  // write your function here
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
  return true;
}

module.exports = { isEqual };
