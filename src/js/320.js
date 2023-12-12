//1
let date = new Date(2018, 1, 35);
console.log(date); //  2018-03-06
//2
date = new Date(2018, 15, 1);
console.log(date); //  2019-03-31
//3
date = new Date(2018, 3, 31);
console.log(date); //  2018-04-30
//4
date = new Date(2018, 1, 31);
console.log(date); //  2018-03-02
//5
date = new Date(2018, 12, 33);
console.log(date); //  2019-02-01
//6
date = new Date(2018, 33, 33);
console.log(date); //  2020-11-01
//7
date = new Date(2018, 5, 0);
console.log(date); //  2018-05-30
//8
date = new Date(2018, 0, 0);
console.log(date); //  2017-12-30
//9
date = new Date(2018, -12, -33);
console.log(date); //  2016-11-27
//10
date = new Date(2018, 0, 1, 23, 0, 60);
console.log(date); //  2018-01-01
//11
date = new Date(2018, 0, 1, 23, 60, 0);
console.log(date); //  2018-01-01
//12
date = new Date(2018, 0, 1, 100, 100, 100);
console.log(date); // 2018-01-05