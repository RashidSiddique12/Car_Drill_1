// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000.
//Using the array you just obtained from the previous problem, find out how many cars were made
//before the year 2000 and return the array of older cars and log its length.

function olderCarsbefore2000(yearsOfCar) {
  const arr = new Array();
  let k = 0;
  for (let i = 0; i < yearsOfCar.length; i++) {
    if (yearsOfCar[i] < 2000) {
      arr[k++] = yearsOfCar[i];
    }
  }

  return arr;
}

module.exports = { olderCarsbefore2000 };
