const {inventory} = require('../inventoryData');
const {carDetails} = require('../problem1');
const carId = 33
const carData = carDetails(inventory, carId);

// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
console.log(`Car 33 is a ${carData.car_year} ${carData.car_make} ${carData.car_model}` )