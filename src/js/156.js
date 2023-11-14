//1

let tot = ''

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        tot += i
    }
}
console.log(tot)

//2

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        tot = ''
        tot += String(i) + String(j)
        document.write(tot + ' ')
    }
}
