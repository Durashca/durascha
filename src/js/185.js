//1

let num = Math.sqrt(379)
console.log(Math.round(num), Math.ceil(num), Math.floor(num))

//2
num = Math.sqrt(387)
let mas = {
    Math: {
        floor: Math.floor(num),
        ceil: Math.ceil(num)

    }
}

console.log('floor', mas['Math'] ['floor'])
console.log('ceil', mas['Math'] ['ceil'])

