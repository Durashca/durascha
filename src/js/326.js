//1
let now  = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);

console.log(date.getDay())

//2
date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate() )

console.log(date.getDay())

//3
date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate() )

console.log(date.getDay())

