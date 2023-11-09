
const {inventory} = require('./inventoryData');

function carmodel(){
    const arr = new Array(50);
    for(let i=0; i<arr.length; i++){
        arr[i] = inventory[i].car_model.toLocaleUpperCase();

    }
    
    return arr.sort();
}

module.exports = {carmodel};