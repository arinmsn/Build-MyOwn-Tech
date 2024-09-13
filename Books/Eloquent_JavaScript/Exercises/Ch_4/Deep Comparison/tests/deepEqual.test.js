const assert = require("assert");
const { deepEqual } = require("../deepEqual");

describe("deepEqual function should compare objects correctly", () => {
  it("should be able to deep compare objects, even nulls", () => {
    let obj = { here: { is: "an" }, object: 2 };
    assert.strictEqual(deepEqual(obj, obj), true);
  });

  it("should return false for different objects", () => {
    let obj1 = { a: 1, b: 2 };
    let obj2 = { a: 1, c: 3 };
    assert.strictEqual(deepEqual(obj1, obj2), false);
  });
});
