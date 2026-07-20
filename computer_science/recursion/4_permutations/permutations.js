const permutations = function (data) {
  if (data.length <= 1) return [data];
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    const remaining = [...data.slice(0, i), ...data.slice(i + 1)];
    const subPermutations = permutations(remaining);
    for (const sub of subPermutations) {
      result.push([current, ...sub]);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
