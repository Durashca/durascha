let arr = [1, 2, 3, 4, 5];

function func() {
    let tot = arr.length
    for (let i = 1; i <= tot; i++){
        console.log(arr.shift())
        console.log(arr)
    }

}

func(arr)