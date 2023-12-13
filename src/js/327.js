//1
let data1 = new Date(2024, 0, 1, 59, 59 )
let data2 = new Date(2023, 8, 10, 59,59)

console.log(data1 - data2)

//2
let now = new Date()
data1 = new Date(now.getFullYear() , 12, 20, 59,59 )
data2 = new Date(now.getFullYear() + 1, 12, 10,59,59)
console.log((data2 - data1) / (1000 * 60 * 60 * 24) )
