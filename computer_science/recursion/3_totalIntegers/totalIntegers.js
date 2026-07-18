const totalIntegers = function (data) {
  if (typeof data !== "object" && !Array.isArray(data)) {
    return undefined;
  }

  let count = 0;
  if (Array.isArray(data)) {
    for (const item of data) {
      if (Number.isInteger(item)) {
        count += 1;
      } else {
        const result = totalIntegers(item);
        if (result) {
          count += result;
        }
      }
    }
  }

  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    const values = Object.values(data);
    for (const value of values) {
      if (Number.isInteger(value)) {
        count += 1;
      } else {
        const result = totalIntegers(value);
        if (result) {
          count += result;
        }
      }
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
