shuffleArray = (arra1) => {
    let ctr = arra1.length;
    let temp;
    let index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffleArray(myAarray));