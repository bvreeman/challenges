let myString = 'The Quick Brown Fox';
let answerArray = []

myArray = myString.toUpperCase().split(' ');

firstToLower = () => {
    myArray.forEach((item, i) => {
        let changedLetter = item[0].toLowerCase();
        let replaceWords = item.replace(item[0], changedLetter)
        answerArray.push(replaceWords)
    })
}

firstToLower();

console.log(answerArray.join(' '));