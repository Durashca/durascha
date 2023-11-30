function func1 () {
   return  function func_loc1 () {
        return 1
    }

}

function  func2 () {
    return function func_loc2 () {
        return 2
    }
}

console.log(func1()() + func2()())