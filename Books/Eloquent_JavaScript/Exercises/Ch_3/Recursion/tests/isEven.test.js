const assert = require("assert");
const isEven = require("../isEven");

describe("Ensure isEven returns proper boolean", () => {
  it("should return true for positive even whole numbers", () => {
    assert.deepStrictEqual(isEven(2), true);
    assert.deepStrictEqual(isEven(12), true);
    assert.deepStrictEqual(isEven(98), true);
    assert.deepStrictEqual(isEven(50), true);
  });

  it("should return false for positive odd whole numbers", () => {
    assert.deepStrictEqual(isEven(9), false);
    assert.deepStrictEqual(isEven(23), false);
    assert.deepStrictEqual(isEven(87), false);
    assert.deepStrictEqual(isEven(127), false);
  });

  it("should return true for negative even whole numbers", () => {
    assert.deepStrictEqual(isEven(-10), true);
    assert.deepStrictEqual(isEven(-20), true);
    assert.deepStrictEqual(isEven(-56), true);
    assert.deepStrictEqual(isEven(-32), true);
  });

  it("should return false for negative odd whole numbers", () => {
    assert.deepStrictEqual(isEven(-3), false);
    assert.deepStrictEqual(isEven(-165), false);
    assert.deepStrictEqual(isEven(-171), false);
    assert.deepStrictEqual(isEven(-17), false);
  });
});
