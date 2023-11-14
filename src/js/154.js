//1

let mas = [2, 5, 3, 0, 1, 7, -9, 8]

for ( let elem of mas){
    if (elem == 0){
        break
    }
    console.log(elem)
}

//2
let tot = 0

for (let elem of mas){
    if ( elem < 0){
        break
    }
    tot += elem
}
console.log(tot)

//3

tot = 0

for (let elem of mas){
    if (elem === 3){
        break
    }
    tot += 1
}

console.log(tot)

//4