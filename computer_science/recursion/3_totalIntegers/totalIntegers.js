const totalIntegers = function (data, count = 0, isInitialCall = true) {
  if (isInitialCall) {
    if (typeof data !== "object" || (data === null && !Array.isArray(data))) {
      return undefined;
    }
  }

  if (Number.isInteger(data)) {
    count += 1;
    return count;
  }

  if (Array.isArray(data)) {
    for (const element of data) {
      count += totalIntegers(element, 0, false);
    }
    return count;
  }

  if (typeof data === "object" && data !== null) {
    for (const element of Object.values(data)) {
      count += totalIntegers(element, 0, false);
    }
    return count;
  }

  return false;
};

// Do not edit below this line
module.exports = totalIntegers;
