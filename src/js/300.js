let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [name, surname,  ...info] = arr

info = arr.slice(2);

console.log(info)
