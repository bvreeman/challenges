const arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]

const sortedArray = arr1.sort((a, b) => {
    return a - b
});

console.log('Original Array', arr1)
console.log('Sorted Array', sortedArray);