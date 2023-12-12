function isLeap (Hours){
    let date = new Date(Hours, 2, 0)

    return console.log(date.getDate() === 29)
}

isLeap(2020) // true
isLeap(2018) // false