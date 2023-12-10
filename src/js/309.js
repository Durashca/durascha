//1
function func(employee) {
    let [name, surname, department, position, salary]  = employee
    console.log(name, surname, salary)
}

func( ['John', 'Smit', 'development', 'programmer', 2000] );
//2
function func2(employee) {
    let [name, surname, info]   = employee
    console.log(name ,surname, info)
}

func2( ['John', 'Smit', 'development', 'programmer', 2000] );
//3
function func3(employee) {
    let [name, surname, department, position = 'джуниор'] = employee

    console.log(name, surname, department, position)
}

func3( ['John', 'Smit', 'development'] );
//4
function func4(department, employee, hired) {
    let [name, surname] = employee

    let [year, month ,day] = hired

    console.log(name, surname, year, month, day, department)
}

func4( 'development', ['John', 'Smit'], [2018, 12, 31] );