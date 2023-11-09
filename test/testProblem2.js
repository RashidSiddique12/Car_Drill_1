
const {inventory} = require('../inventoryData');
const {lastCar} = require('../problem2');

const lastCardetails = lastCar(inventory);
console.log(`Last car is a ${lastCardetails.car_make} ${lastCardetails.car_model}`);
