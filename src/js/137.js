let mas = [1, 2, 3]

if (mas.length === 3) {
    console.log(Number(mas[0]) + Number(mas[1]) + Number(mas[2]))
} else if (mas.length < 3) {
    console.log('в эелементе меньше 3 элементов')
} else {
    console.log('в эелементе больше 3 элементов')
}