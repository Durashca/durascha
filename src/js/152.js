let str = ''

for (let i =  1; i <= 5; i++){
    str += '-'
}
console.log(str)

str = ''

for (let i = 1; i <= 9; i++){
    str += i
}
console.log(str)

//3
str = ''

for (let i = 9; i >= 1; i--){
    str += i
}
console.log(str)

//4

str = ''

for (let i = 1; i <= 9; i++){
    str += '-' + i
}
str += '-'
console.log(str)