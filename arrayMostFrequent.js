const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let object = {};
let frequency = 0;
let mostFrequentItem = [];

function mostFreqStr () {
      arr1.forEach(item => {
        if (!object[item]) { 
            object[item] = 1 
        } 
            else { object[item]++ }
 
        if (object[item] > frequency) {
            frequency = object[item];
            mostFrequentItemy = [item];
        } else if (object[item] === frequency) {
            mostFrequentItem.push(item);
        }
      });
 
      return mostFrequentItem;
    }
    mostFreqStr()

    console.log('The most frequent item is', mostFrequentItem, 'and it happened', frequency, 'times.');