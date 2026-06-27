const contains = function (data, target_value) {
  if (Number.isNaN(data) && Number.isNaN(target_value)) {
    return true;
  }

  if (data === target_value) {
    return true;
  }

  if (typeof data === "object" && data !== null) {
    for (const value of Object.values(data)) {
      if (contains(value, target_value)) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
