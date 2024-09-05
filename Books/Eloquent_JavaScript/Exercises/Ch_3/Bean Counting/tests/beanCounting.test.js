const assert = require("assert");
const countChar = require("../beanCounting");

describe("it should correctly count any char in a string", () => {
  it("should return correct number of characters in a string", () => {
    assert.strictEqual(countChar("kakkerlak", "k"), 4);
    assert.strictEqual(countChar("flibbertigibbet", "b"), 4);
    assert.strictEqual(countChar("abracadabra", "a"), 5);
    assert.strictEqual(countChar("cachectic", "c"), 4);
    assert.strictEqual(countChar("CaCtus", "C"), 2);
    assert.strictEqual(countChar("beekeeper", "e"), 5);
    assert.strictEqual(countChar("divisibilities", "i"), 6);
    assert.strictEqual(countChar("xmen", "z"), 0);
    assert.strictEqual(countChar("flipflopped", "j"), 0);
  });
});
