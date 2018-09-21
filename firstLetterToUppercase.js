
firstLetterToUppercase = (string) => {
    let arr1 = [];
    let answer = string.split(' ').forEach((item) => {
        arr1.push(item[0].toUpperCase() + item.slice(1))
    })
    console.log(arr1.join(' '));
}

firstLetterToUppercase('the quick brown fox')