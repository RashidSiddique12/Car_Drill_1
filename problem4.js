// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
//Execute a function that will return an array from the dealer data containing only the car
//years and log the result in the console as it was returned.

function yearsOfCardata(inventory) {
  const arr = new Array(inventory.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = inventory[i].car_year;
  }

  return arr;
}

module.exports = yearsOfCardata;
