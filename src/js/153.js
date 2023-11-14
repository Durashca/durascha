//1

let str

for (let i = 10; i <= 1000; i++) {
    str = String(i)
    console.log('1 ' + str[0])
}

//2

str = ''

for (let i = 10; i < 1000; i++) {
    str = String(i)
    console.log('2 ' + Number(str[0]) + Number(str[1]))
}

//3

str = ''

for (let i = 10; i < 1000; i++) {
    str = String(i)

    if (str[0] == 1) {
        console.log('3 ' + i)
    }
}

//4

str = ''

for (let i = 10; i < 1000; i++) {
    str = String(i)

    if (Number(str[0]) + Number(str[1]) == 5) {
        console.log('4 ' + str)
    }
}