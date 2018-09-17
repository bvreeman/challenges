const arr1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

printArrayRows = () => {
    let string;
    arr1.forEach((item, i) => {
        let addRowNumber = item.splice(0, 0, `\nRow ${i + 1}`).join(' ').toString()
        string = arr1.join(' \n').toString().replace(/,/g,"\n");
    })
    console.log(string);
}

printArrayRows();