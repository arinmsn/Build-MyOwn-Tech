const assert = require("assert");
const range = require("../sumOfRange");

describe("it should return an array with correct start/end numbers", () => {
  it("should return correct numbers in the array", () => {
    assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
  });
});
