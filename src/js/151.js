//1

let arr = [2, 5, 9, 3, 1, 4];
let tot = 0

for (let i of arr){
    tot += i
}
console.log(tot)

//2

tot = 0

for (i of arr){
    if ( i % 2 === 0){
        tot += i
    }
}
console.log(tot)

//3

tot = 0

for (i of arr){
    tot += i**2
}

console.log(tot)

//4

tot = 1

for (i of arr){
    tot *= i
}

console.log(tot)