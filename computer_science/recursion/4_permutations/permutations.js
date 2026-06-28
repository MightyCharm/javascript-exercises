const permutations = function (data) {
  if (data.length <= 1) {
    return [data];
  }
  const results = [];
  for (let i = 0; i <= data.length - 1; i++) {
    const current = data[i];
    const remaining = [];
    for (let j = 0; j <= data.length - 1; j++) {
      const number = data[j];
      if (number !== current) {
        remaining.push(number);
      }
    }
    const sub_permutations = permutations(remaining);
    for (const item of sub_permutations) {
      results.push([current, ...item]);
    }
  }
  return results;
};

// Do not edit below this line
module.exports = permutations;
