function func (Hours,Month){
    let date = new Date(Hours, Month, 0)
    console.log(date.getDate())
}

func(2018, 2)


function funcdate(year, month) {
    let date = new Date(year, month, 1);

    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);

    let dayOfWeek = date.getDay();

    return dayOfWeek;
}

let dayOfWeek = funcdate(2025, 4); // 4 представляет май (месяцы отсчитываются с нуля)

let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let lastDayOfWeek = weekdays[dayOfWeek];

console.log(lastDayOfWeek);