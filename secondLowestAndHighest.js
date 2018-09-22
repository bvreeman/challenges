
findTheNumbers = (array) => {
    uniqueNumbers = [];
    array.forEach((item, i) => {
        if (uniqueNumbers.indexOf(array[i]) == -1) {
            uniqueNumbers.push(array[i])
        }
    })
    uniqueNumbers.sort()

    console.log(`\nOf the original array ${array.join(', ')} \n
    The second lowest number is ${uniqueNumbers[1]}\n
    and the second highest number is ${uniqueNumbers[(uniqueNumbers.length - 2)]}`)
}

findTheNumbers([3,1,1,6,5,9,9]);