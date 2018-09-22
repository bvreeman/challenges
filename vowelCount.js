
vowelCount = (string) => {
    let count = 0;
    let array = string.toLowerCase().split('').forEach((item, i) => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count++
        }
    })
    console.log(count)
}

vowelCount('The quick brown fox')