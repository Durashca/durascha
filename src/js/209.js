function terz (num) {

    let tot = 0

    while (true){
       num =  num / 2
        tot++

        if (num < 10){
            return tot
        }
    }
}

console.log(terz(100))