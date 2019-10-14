// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
 if(str1.length === str2.length){
  for(let i = 0; i < str1.length; i++){
    if(str1[i] === str2[i]){
      continue;
    } else{
      break;
    }
  }
  return true;
 }
  
 return false;
 
};

module.exports = { checkAnagrams };

//refactoring
return str1.split("").forEach((letter, i) =>{
  if (str1[i]=== str2[i]){
    continue;
  } else {
    return false
  }

}, true)
