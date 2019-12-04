class Calculator {
    constructor(){    
    this.value = 0
    }

}

Calculator.prototype.add =  function (newVal) {
 return this.value += newVal
}

Calculator.prototype.subtract = function (newVal) {
    return this.value -= newVal
}

Calculator.prototype.divide = function (newVal) {
    return this.value /= newVal
}

Calculator.prototype.multiply = function (newVal) {
    return this.value *= newVal
}


Calculator.prototype.clear = function () {
    return this.value= 0
}

module.exports = { Calculator };
