//1

function test() {
    let num = 1

    return function () {
        console.log(num)
        num++
    }
}

let func = test()
func()
func()

//2

function test2() {
    let num = 10

    return function () {
        console.log(num)
        num--
    }
}

let func2 = test2()
func2()
func2()

//3

function test3() {
    let num = 10

    return function () {
        if (num <= 0) {
            console.log('ошибка')
        } else {
            console.log(num)
            num--
        }
    }
}

let func3 = test3()

for (let i = 0; i <= 10; i++) {
    console.log(func3())
}
