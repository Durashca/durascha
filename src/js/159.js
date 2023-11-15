//1

let mas = []

for (let i = 1; i <= 10; i++){
    mas.push(i)
}
console.log(mas)

//2

let str = []

for (let i = 1; i <= 10; i++){
    str.push('x')
}

console.log(str)

//3

mas = [2, -1, 4, -2, 6, -3, 8, ]
let nev_mas = []

for (elem of mas){
    if (elem > 0){
        nev_mas.push(elem)
    }
}
console.log(nev_mas)

