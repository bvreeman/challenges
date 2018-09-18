const arr1 = [1, 1, 2, 4, 4, 6, 7, 7]

let newArray = [];

filterDuplicates = () => {
    arr1.forEach((item, i) => {
        if (newArray.includes(item)) {
            console.log(`There's already a ${item} in the array.`)
        } else {
            newArray.push(item)
        }
    })
    console.log(newArray)
}

filterDuplicates();