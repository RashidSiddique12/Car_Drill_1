
function carmodel(inventory){
    const arr = new Array(inventory.length);
    for(let i=0; i<arr.length; i++){
        arr[i] = inventory[i].car_model.toLocaleUpperCase();

    }
    
    return arr.sort();
}

module.exports = {carmodel};