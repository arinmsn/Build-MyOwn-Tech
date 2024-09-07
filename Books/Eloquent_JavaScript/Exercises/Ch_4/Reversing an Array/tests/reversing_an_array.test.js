const assert = require("assert");
const { reverseArray, reverseArrayInPlace } = require("../reversing_an_array");

describe("reverseArray should reverse an array and return a brand new array (not-inplace)", () => {
  it("should return an array with elements from original array in reverse order", () => {
    assert.deepStrictEqual(reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    assert.deepStrictEqual(reverseArray([3, 2, 1, 0]), [0, 1, 2, 3]);
    assert.deepStrictEqual(reverseArray(["A", 1, "B", 2]), [2, "B", 1, "A"]);
  });
});

describe("reverseArrayInPlace should reverse an array in-place", () => {
  it("should reverse the elements of the array in-place", () => {
    let arr1 = ["A", "B", "C"];
    reverseArrayInPlace(arr1);
    assert.deepStrictEqual(arr1, ["C", "B", "A"]);

    let arr2 = [3, 2, 1, 0];
    reverseArrayInPlace(arr2);
    assert.deepStrictEqual(arr2, [0, 1, 2, 3]);

    let arr3 = ["A", 1, "B", 2];
    reverseArrayInPlace(arr3);
    assert.deepStrictEqual(arr3, [2, "B", 1, "A"]);
  });

  it("should return the same array object (not a new array)", () => {
    let arr = [1, 2, 3, 4, 5];
    let result = reverseArrayInPlace(arr);
    assert.strictEqual(result, arr);
  });

  it("should handle empty arrays", () => {
    let arr = [];
    reverseArrayInPlace(arr);
    assert.deepStrictEqual(arr, []);
  });

  it("should handle arrays with one element", () => {
    let arr = [1];
    reverseArrayInPlace(arr);
    assert.deepStrictEqual(arr, [1]);
  });
});
