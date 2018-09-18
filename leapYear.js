const monthsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let answer;
let sumArray = [];

daysInMonth = (month, year) => {
    monthsArray.map((item) => {
        answer = new Date(year, item, 0).getDate();
        sumArray.push(answer)
    })
}

getSum = ((total, num) => {
    return total + num;
})

isItLeapYear = () => {
    finalAnswer = sumArray.reduce(getSum);
    if (finalAnswer === 365) { 
        console.log('That was not a leap year')
    } else {
        console.log('You found a leap year!')
    }
}

daysInMonth(1, 2000);
isItLeapYear();