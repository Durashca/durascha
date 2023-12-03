//1

let result = (function (){
    let num = 1

    return function (){
        if (num > 5){
            num = 1
        }
        console.log(num)
        num++


    }
})()

for (let i = 0; i <= 5; i++){
    result()
}

