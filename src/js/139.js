let num = 12340
let str = String(num)
if (str[str.length - 1] == 0) {
    console.log('да')
}

num = 12346
str = String(num)[str.length -1]
if (str == 0 ||str == 2 || str  == 4 || str == 6 || str == 8){
    console.log('число четное')
}else {
    console.log('число не четное')
}