//1
let date1 = new Date();
let date2 = new Date(2021, date1.getMonth(), date1.getDate());

console.log('полдень', date1 > date2);
//2
let data1 = new  Date()
let data2 = new  Date(data1.getFullYear(), data1.getMonth(), 15)

if (data1 >= date2){
    console.log(true)
}else {
    console.log(false)
}
