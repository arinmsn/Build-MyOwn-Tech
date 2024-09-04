const assert = require("assert");
const minimum = require("../minimum");

describe("Verify minimum function works correctly", () => {
  it("it should return min value", () => {
    assert.strictEqual(minimum(0, 10), 0);
    assert.strictEqual(minimum(9, 1), 1);
  });

  it("it should handle negative numbers correctly", function () {
    assert.strictEqual(minimum(0, -10), -10);
    assert.strictEqual(minimum(-10, 0), -10);
    assert.strictEqual(minimum(-10, -200), -200);
    assert.strictEqual(minimum(-15, -1), -15);
  });
});
