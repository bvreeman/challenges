const arr1 = [1, 2, 6, 9, 11]
let product = 1;

getSum = (total, num) => { return total + num }

arraySum = () => {
    console.log(`The sum of the array is ${arr1.reduce(getSum)}`);
}

getProduct = () => {
    arr1.forEach((item, i) => {
        product *= arr1[i]
    })
    console.log(`The product of the array is ${product}`)
}

getProduct();
arraySum()
