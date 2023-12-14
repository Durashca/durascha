function countWeekendNewYears() {
    let startDate = new Date(2000, 0, 1); // 1 января 2000 года
    let currentDate = new Date(); // Текущая дата

    let count = 0; // Счетчик выходных 1 января

    while (startDate < currentDate) {
        // Проверяем, является ли день выходным (0 = воскресенье, 6 = суббота)
        if (startDate.getDay() === 0 || startDate.getDay() === 6) {
            count++;
        }

        // Переходим на следующий год
        startDate.setFullYear(startDate.getFullYear() + 1);
    }

    return count;
}

let weekendsCount = countWeekendNewYears();
console.log("Количество раз, когда 1 января выпадало на выходной:", weekendsCount);