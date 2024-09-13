/*
Deep Equal

The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/
function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  if (
    typeof value1 === "object" &&
    value1 !== null &&
    typeof value2 === "object" &&
    value2 !== null
  ) {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!deepEqual(value1[key], value2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = { deepEqual };
