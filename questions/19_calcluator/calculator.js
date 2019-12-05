class Calculator {
    constructor(){    
    this.value = 0
    }
}

Calculator.prototype.add =  function (newVal) {
  this.value += newVal
  return this
}

Calculator.prototype.subtract = function (newVal) {
    this.value -= newVal
    return this
}

Calculator.prototype.divide = function (newVal) {
    if(newVal !== 0){
     this.value /= newVal
     return this
    }
}

Calculator.prototype.multiply = function (newVal) {
     this.value *= newVal
     return this
}


Calculator.prototype.clear = function () {
     this.value= 0
     return this
}

module.exports = { Calculator };
