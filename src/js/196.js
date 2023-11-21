//1
let mas = [1, 2, 3, 4, 5]
mas.splice(1, 3, 4)
console.log(mas)

//2
mas = [1, 2, 3, 4, 5]
mas.splice(3, 0, 'a', 'b', 'c')
console.log(mas)
//3
mas = [1, 2, 3, 4, 5]
mas.splice(1, 0, 'a', 'b')
mas.splice(6, 0, 'c')
mas.splice(mas.length , 0, 'e')
console.log(mas)

