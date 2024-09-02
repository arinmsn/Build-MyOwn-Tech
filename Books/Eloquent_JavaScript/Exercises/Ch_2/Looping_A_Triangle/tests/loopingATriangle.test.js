const assert = require("assert");
const looping_a_triangle = require("../loopingAtrinagle");

describe("looping_a_triangle", () => {
  it("should output correct triangle", () => {
    const log = [];
    console.log = (output) => log.push(output);

    looping_a_triangle("#", 7);

    const expectedOutput = [
      "#",
      "##",
      "###",
      "####",
      "#####",
      "######",
      "#######",
    ];

    assert.deepStrictEqual(log, expectedOutput);
  });

  it("should output nothing when character is an empty string", () => {
    const log = [];
    console.log = (output) => log.push(output);

    looping_a_triangle("", 7);

    const expectedOutput = ["", "", "", "", "", "", ""];

    assert.deepStrictEqual(log, expectedOutput);
  });

  it("should output nothing when both parameters are empty or 0", () => {
    const log = [];
    console.log = (output) => log.push(output);

    looping_a_triangle("", 0);

    const expectedOutput = [];

    assert.deepStrictEqual(log, expectedOutput);
  });
});
