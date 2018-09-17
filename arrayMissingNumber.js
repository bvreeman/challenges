const numArray = [189459, 189460, 189461, 189463, 189466];
let mia;
mia = numArray.reduce(function(accumulator, currentValue, currentIndex, array) {
  const difference = currentValue - array[currentIndex-1];
  console.log('difference', difference)
  console.log('accumulator', accumulator)
  console.log('location', array[currentIndex-1])
  if (difference > 1) {
    let i = 1;
    while (i < difference) {
        accumulator.push(array[currentIndex-1]+i);
      i++;
    }
  }
  return accumulator;
}, []);
console.log(mia);