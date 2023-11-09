
function carDetails(inventory, id){
    for(let i=0; i<inventory.length; i++){
        if(id === inventory[i].id){
            return inventory[i];
        }
    }
    
}


module.exports = {carDetails};