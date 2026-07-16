const contains = function (data, target_value) {
  if (
    data === target_value ||
    (Number.isNaN(data) && Number.isNaN(target_value))
  ) {
    return true;
  }
  if (typeof data === "object" && data !== null) {
    const values = Object.values(data);
    for (const value of values) {
      const result = contains(value, target_value);
      if (result) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
