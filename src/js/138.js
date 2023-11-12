let str1 = 'accccccccccx'

if (str1[0] === 'a') {
    console.log('1 yes')
}
if (str1[str1.length - 1] === 'x') {
    console.log('2 yes')
}

//3
str1 = 'asssssssssb'
if (str1[0] === 'a' && str1[str1.length - 1] === 'b') {
    console.log('3 yes')

}