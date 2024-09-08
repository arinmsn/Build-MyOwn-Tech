const assert = require("assert");
const specialPythagoreanTriplet = require("./specialPythagoreanTriplet");

describe("The correct product a*b*c should be returned given a sum of abc", () => {
  it("should return a number", () => {
    result = specialPythagoreanTriplet(24);
    assert.deepStrictEqual(typeof result, "number");
  });

  it("should return the correct product", () => {
    assert.deepStrictEqual(specialPythagoreanTriplet(0), -1);
    assert.deepStrictEqual(specialPythagoreanTriplet(24), 480);
    assert.deepStrictEqual(
      specialPythagoreanTriplet(120),
      49920 || 55080 || 60000
    );
    assert.deepStrictEqual(specialPythagoreanTriplet(1000), 31875000);
  });
});
