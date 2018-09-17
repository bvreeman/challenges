const numArray = [0189459, 0189460, 0189461, 0189463, 0189466];
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