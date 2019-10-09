function times(num) {
    return function (inputNum){
        return inputNum * num
    }
}

module.exports = { times };
