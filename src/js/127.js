let day = 10000
if (!(1 <= day && day <= 31)) {
    console.log('собщение об ошибке')
} else if (1 <= day && day <= 10) {
    console.log('первая декада')
} else if (11 <= day && day<= 20) {
    console.log('второая декада')
} else if (21 <= day && day <= 31) {
    console.log('третья декада')
}