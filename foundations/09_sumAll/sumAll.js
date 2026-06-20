const sumAll = function(...num) {
    let start;
    let stop;

    // check if values are numbers
    if(Number.isInteger(num[0]) === false || Number.isInteger(num[1]) === false ) {
        return "ERROR";
    }
    // check for negative numbers
    if(num[0] < 0 || num[1] < 0) {
        return "ERROR";
    }
    // check if first number is smaller than second
    if(num[0] < num[1]) {
        start = num[0];
        stop = num[1];
    }
    else {
        start = num[1];
        stop = num[0];
    }
    let sum = 0;
    for(let i=start; i <= stop; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
