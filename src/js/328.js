let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

console.log((date2 - date1) / (1000 * 60 * 60))