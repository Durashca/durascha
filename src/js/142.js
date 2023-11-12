//1
let month = 5
if (1 <= month && month <= 12) {
    if (1 <= month && month <= 3) {
        console.log('зима')
    }
    if (4 <= month && month <= 6) {
        console.log('весна')
    }
    if (7 <= month && month <= 9) {
        console.log('лето')
    }
    if (10 <= month && month <= 12) {
        console.log('осень')
    }
} else {
    console.log('ошибка')
}
//2
let str = 'abcd'

if (str[0] === 'a' ){
    console.log('да')
}else {
    console.log('нет')
}
//3
let num = 12345
str = String(num)

if (str[0] == 1 && str[1] == 2 && str[2] == 3){
    console.log('yes')
}else {
    console.log('no')
}
//4
num = 123
str = String(num)
console.log(Number(str[0]) + Number(str[1]) + Number(str[2]))
//5
num = String(123123)
let str1 = Number(num[0]) + Number(num[1]) + Number(num[2])
let str2 = Number(num[3]) + Number(num[4]) + Number(num[5])

if (str1 === str2){
    console.log('равняется')
}else {
    console.log('не равняется')
}