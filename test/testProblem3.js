const {inventory} = require('../inventoryData');
const {carmodel} = require('../problem3');

const modelOdCar = carmodel(inventory);
for(let i=0; i<modelOdCar.length; i++){
    console.log(modelOdCar[i]);
}
