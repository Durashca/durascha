//1
let mas = [1, 2, 3, 4, 5]

/*  как один из вариантов

if (mas.indexOf(3) > -1){
    console.log('да есть')
}else {
    console.log('не нету')
}
*/

if (mas.includes(3)){
    console.log('да есть')
}else {
    console.log('не нету')
}