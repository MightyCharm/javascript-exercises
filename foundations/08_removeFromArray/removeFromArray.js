const removeFromArray = function(arr, ...items) {
    
    items.forEach( (item) => {
        let indexRemove = arr.indexOf(item);
        if(indexRemove > -1) {
            arr.splice(indexRemove, 1);
        };
    });
    return arr;  
};

// Do not edit below this line
module.exports = removeFromArray;
