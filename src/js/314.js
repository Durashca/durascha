let day = new Date()

//1

console.log(day.getDay())

//2

if (day.getDay() === 0){
    console.log('выходной')
}else {
    console.log('рабочий')
}

//3

let res = 7 - day.getDay() // включительно

console.log(res)
