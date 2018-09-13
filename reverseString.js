
function reverseString(str) {
    let newArray = str.split('').reverse().join('')
    console.log(newArray)
}

reverseString("hello");

reverseString2 = (str) => {
    let newArray = str.split('').reverse().join('')
    console.log(newArray)
}

reverseString2('This is me')