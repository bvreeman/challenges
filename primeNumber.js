
primeNumber = (int) => {
    let answer;
    let starter = 2;
    if (int % starter == 0) {
        console.log(`${int} is a Prime Number`)
    } else {
        console.log(`${int} is not a Prime Number`)
    }
}

primeNumber(8)