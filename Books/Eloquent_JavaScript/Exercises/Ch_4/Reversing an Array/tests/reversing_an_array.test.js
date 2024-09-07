const assert = require("assert");
const { reverseArray } = require("../reversing_an_array");

describe("reverseArray should reverse an array and return a brand new array (not-inplace)", () => {
  it("should return an array with elements from original array in reverse order", () => {
    assert.deepStrictEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    assert.deepStrictEqual(reverseArray([3, 2, 1, 0]), [0, 1, 2, 3]);
    assert.deepStrictEqual(reverseArray(["A", 1, "B", 2]), [2, "B", 1, "A"]);
  });
});
