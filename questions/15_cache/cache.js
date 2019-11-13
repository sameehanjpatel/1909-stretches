function cache(fnc) {
    if (typeof  fnc !== "function" ){
        throw "Input must be a function."}

//you need closure to solve this 

// const funcObj(...arg) = { 
//         return fnc(...arg)
// }



    return () =>  { }
}

module.exports = { cache };
