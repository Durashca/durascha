let date1 = new Date()
let date2 = new Date(date1.getFullYear(),date1.getMonth(), date1.getDate() )
console.log(((date1 - date2) / (1000 * 60 * 60)).toFixed(0))

//так для себя(время прохождения js)
let data3 = new Date();
let data4 = new Date(2023, 9, 10, 23, 59, 59);
console.log(((data3 - data4) / (1000 * 60 * 60 * 24)).toFixed(0))