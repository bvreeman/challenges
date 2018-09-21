numberReversed = (number) => {
    let answer = number.toString().split('').reverse().join('');
    console.log(answer);

}

numberReversed(123456789);