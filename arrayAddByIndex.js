let arr1 = [1,0,2,3,4]
let arr2 = [3,5,6,7,8,13]

addByIndex = (array1, array2) => {
    let answer = [];
    let i = 0;
    let x = 0;

    while(array1.length > 0 && array2.length > 0) {
        if (array1.length === array2.length) {
            array1.forEach((item, i) => {
                answer.push(array1[i] + array2[i])
            })
        }
        return answer
    }

  }
  
  console.log(addByIndex(arr1, arr2));