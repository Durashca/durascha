let mas = [2, -3, 4, 5, 6, 7,]

//1

for (let elem in mas){
    mas[elem] **= 2
}

console.log(mas)

//2

for (let elem in mas){
    mas[elem] -= 1
}

console.log(mas)

//3

for (let elem in mas){
    mas[elem] += 10
}

console.log(mas)