
longestWordInString = (string) => {
    let answer = string.split(' ')
        .reduce((longest, currentWord) => {
            if(currentWord.length > longest.length)
            return currentWord;
            else
            return longest;
        }, "");
        console.log(answer);
}

longestWordInString('Web Development Tutorial')