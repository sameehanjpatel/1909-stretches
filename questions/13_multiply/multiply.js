const multiply = (num1, num2) => {
    if(!Number.isInteger(num1, num2)){
        throw "only numbers!";
    } else {
        if (arguments.length > 2){
        throw "only two numbers!"; 
        }
    }
    return num1 * num2
}

module.exports = { multiply };
