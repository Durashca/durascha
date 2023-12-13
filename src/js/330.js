let date1 = new Date()
let date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 24)
console.log((date2 - date1) / (1000 * 60))