const pascal = function (row) {
  if (row <= 1) {
    return [1];
  }
  const previousRow = pascal(row - 1);
  const currentRow = [1];

  for (let i = 0; i < previousRow.length - 1; i++) {
    currentRow.push(previousRow[i] + previousRow[i + 1]);
  }

  currentRow.push(1);
  return currentRow;
};

// Do not edit below this line
module.exports = pascal;
