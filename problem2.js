const {inventory} = require('./inventoryData');

function lastCar(index){
    return inventory[index];
}

module.exports = {lastCar};
