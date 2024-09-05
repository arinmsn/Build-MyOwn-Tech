const assert = require("assert");
const countBs = require("../beanCounting");

describe("it should correctly count B`s in a string", () => {
  it("should return correct number of B`s in a string", () => {
    string_list = ["BOB", "BOBbY", "BOBBY"];
    result = [2, 2, 3];

    for (let i = 0; i < string_list.length; i++) {
      assert.strictEqual(
        countBs(string_list[i]),
        result[i],
        `Failed for string "${string_list[i]}": expected ${
          result[i]
        }, but got ${countBs(string_list[i])}`
      );
    }
  });
});
