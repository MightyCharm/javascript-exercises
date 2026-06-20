const repeatString = function(string, num) {
    let resultString = "";
    let i = 0;
    
    // checks if num is negative
    if(num < 0) {
        return "ERROR";
    }
    
    while(i < num) {
        resultString += string;
        i++;
    }
    return resultString;   
};

// Do not edit below this line
module.exports = repeatString;
