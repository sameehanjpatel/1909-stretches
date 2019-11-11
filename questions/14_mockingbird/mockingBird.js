const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
  const arr = [];
  for (let i =0; i< n; i++){
    let funcRun = func()
    arr.push(funcRun)
  }
  return arr
};

module.exports = { repeater };
