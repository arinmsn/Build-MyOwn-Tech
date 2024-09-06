const assert = require("assert");
const { range, sum } = require("../sumOfRange");

describe("it should return an array with correct start/end numbers", () => {
  it("should return correct numbers in the array", () => {
    assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
  });
});

describe("it should return correct sum given an array", () => {
  it("should return correct sum", () => {
    assert.deepStrictEqual(sum(range(1, 10)), 55);
    assert.deepStrictEqual(sum([0, 1, 2, 3, 4, 5]), 15);
  });
});

describe("returns array with correct start and end for given step", () => {
  it("should return a warning and empty string if user enters 0 for step", () => {
    assert.deepStrictEqual(range(0, 5, 0), []);
    assert.deepStrictEqual(range(1, 10, 0), []);
  });

  it("should return an incremented array of numbers given a positive step", () => {
    assert.deepStrictEqual(range(0, 5, 1), [0, 1, 2, 3, 4, 5]);
    assert.deepStrictEqual(range(0, 10, 4), [0, 4, 8]);
    assert.deepStrictEqual(range(0, 10, 3), [0, 3, 6, 9]);
  });

  it("should return an decremented array of numbers given a negative step", () => {
    assert.deepStrictEqual(range(6, 0, -1), [6, 5, 4, 3, 2, 1, 0]);
    assert.deepStrictEqual(range(8, 1, -3), [8, 5, 2]);
    assert.deepStrictEqual(range(19, 12, -4), [19, 15]);
  });
});
