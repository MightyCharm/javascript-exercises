const fibonacci = function(index) {
    index = +index;
    if(index === 0) {
        return 0;
    };
    if(index === 1) {
        return 1;
    }
    if(index < 0) {
        return "OOPS";
    };

    let a = 0;
    let b = 1;
    let next;
    for(let i=1; i < index; i++){
        next = a + b;
        a = b;
        b = next;
    }; 
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
