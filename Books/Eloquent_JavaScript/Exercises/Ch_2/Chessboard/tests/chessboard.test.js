const assert = require("assert");
const chessboard = require("../chessboard");

describe("Chessboard generation TestCase", function () {
  it("should generate a 3x3 chessboard", function () {
    const expected = " # \n" + "# #\n" + " # \n";

    assert.strictEqual(chessboard(3), expected);
  });

  it("should generate a 2x2 chessboard", function () {
    const expected = " #\n" + "# \n";
    assert.strictEqual(chessboard(2), expected);
  });

  it("should generate a 1x1 chessboard", function () {
    const expected = " \n";

    assert.strictEqual(chessboard(1), expected);
  });
});
