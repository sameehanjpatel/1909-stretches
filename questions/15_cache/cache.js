function cache(cb) {
    if (typeof  fnc !== "function" ){
        throw new Error( "Input must be a function.")}
    const memo = {}

    return function (...num) {
        if(memo[num] !== undefined){
            return [memo[num]]
        } else { 
            memo[num] = cb(...num);
            return memo[num];
        }
    }
}

module.exports = { cache };
