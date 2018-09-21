
getCombos = (word) => {
    let arr1 = [];
    let fn = (active, rest) => {
        if (!active && !rest)
            return;
        if (!rest) {
            arr1.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), arr1);
            fn(active, rest.slice(1), arr1);
        }
    }
    fn("", word);
    console.log(arr1.join(', '));
}

getCombos('dog') 