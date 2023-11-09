const {inventory} = require('../inventoryData');
const {BMWandAudi} = require('../problem6');

let carsBMWandAudi = BMWandAudi(inventory);


carsBMWandAudi = JSON.stringify(carsBMWandAudi)
console.log(carsBMWandAudi);

