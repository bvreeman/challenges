const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Pink", "Black", "White"];
const ordinal = ["th","st","nd","rd"]

makeItAString = () => {
    color.forEach((item, i) => {
        if (i + 1 === 1) {
            i = i + 1 + ordinal[1]
        } else if (i + 1 === 2) {
            i = i + 1 + ordinal[2]
        } else if (i + 1 === 3) {
            i = i + 1 + ordinal[3]
        } else if (i + 1 >= 4) {
            i = i + 1 + ordinal[0]
        } 
        console.log(`${i} choice is ${item}`)
    })
}

makeItAString();