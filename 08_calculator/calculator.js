const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach( item => {
    sum += item;
  })
  return sum;
};

const multiply = function(arr) {
  let result = 0;
  for(let i=0; i < arr.length; i++) {
    if(i === 0) {
        result = arr[i];
        continue;
    };
    result *= arr[i];
  };
  return result;
};

const power = function(...items) {
	let number = items[0];
  let pow = items[1];
  let result;
  for(let i=0; i < pow; i++) {
    if(i === 0) {
      result = number;
      continue;
    };
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	if(number === 0 || number === 1) {
    return 1;
  }

  let result = 0;
  for(let i=0; i < number; i++) {
    if(i === 0) {
      result = number;
      continue;
    };
    result *= number - i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
