//1
let arr = [2, 3, 4, 5, 6]

function overkill() {
    for (i of arr) {
        if (i < 2) {
            return false
        }
    }

    return true
}

console.log('#1', overkill())

//2

function pos_neg(num) {
    let str = String(num)

    for (let i = 0; i < str.length; i++){
        if(Number(str[i]) % 2 === 0){
            return false
        }
    }

    return true
}

console.log('#2', pos_neg(557))
console.log('#2', pos_neg(556))

//3

arr = [2, 3, 4, 5, 5]

function contract () {
    let num = 0
    for (i of arr){

        if (i === num ){
            return true
        }
        num = i
    }

    return  false
}

console.log('#3', contract())

arr = [2, 3, 4]

console.log('#3', contract())