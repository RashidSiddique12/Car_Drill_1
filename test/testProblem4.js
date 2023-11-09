const { inventory } = require("../inventoryData");
const yearsOfCardata = require("../problem4");

const yearsOfCar = yearsOfCardata(inventory);

for (let i = 0; i < yearsOfCar.length; i++) {
  console.log(yearsOfCar[i]);
}

module.exports = yearsOfCar;
