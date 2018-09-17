const myColor = ["Red", "Green", "White", "Black", 'Purple'];

const arrayToString = myColor.slice(0, -1).join(', ')+' and '+myColor.slice(-1);

console.log('I like the colors', arrayToString)