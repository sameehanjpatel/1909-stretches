function times(num) {
    return function (inputNum){
        return inputNum * num
    }
}

module.exports = { times };


livingNeighbors(row,col){
    let liveNeighbors = 0;
    if(getCell(this.board[row-1], this.board[col-1] ) === 1){
        liveNeighbors++;
    } 
}
    
getCell(row, col){
    if(row === -1){
        return 0;
    }
    if (col ===  -1){
        return 0;
    }
    

}
