const assert = require("assert");
const { arrayToList, listToArray } = require("../aList");

describe("Convert an array into a list", () => {
  it("should convert an empty array to null", function () {
    assert.strictEqual(arrayToList([]), null);
  });

  it("should convert [1] to {value: 1, rest: null}", function () {
    const result = arrayToList([1]);
    assert.deepEqual(result, { value: 1, rest: null });
  });

  it("should convert [1, 2, 3] to a linked list structure", function () {
    const result = arrayToList([1, 2, 3]);
    assert.deepEqual(result, {
      value: 1,
      rest: {
        value: 2,
        rest: {
          value: 3,
          rest: null,
        },
      },
    });
  });

  it("should handle arrays with different data types", function () {
    const result = arrayToList([1, "two", { three: 3 }]);
    assert.deepEqual(result, {
      value: 1,
      rest: {
        value: "two",
        rest: {
          value: { three: 3 },
          rest: null,
        },
      },
    });
  });
});
