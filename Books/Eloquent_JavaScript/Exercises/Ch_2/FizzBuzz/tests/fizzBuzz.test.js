const assert = require("assert");
const fizzBuzz = require("../fizzBuzz");

describe("FizzBuzz Tests", function () {
  it('should return "Fizz" for multiples of 3', function () {
    const result = fizzBuzz();
    assert.equal(result[2], "Fizz"); // 3rd element (i.e., number 3)
    assert.equal(result[5], "Fizz"); // 6th element (i.e., number 6)
  });

  it('should return "Buzz" for multiples of 5', function () {
    const result = fizzBuzz();
    assert.equal(result[4], "Buzz"); // 5th element (i.e., number 5)
    assert.equal(result[9], "Buzz"); // 10th element (i.e., number 10)
  });

  it('should return "FizzBuzz" for multiples of 15', function () {
    const result = fizzBuzz();
    assert.equal(result[14], "FizzBuzz"); // 15th element (i.e., number 15)
    assert.equal(result[29], "FizzBuzz"); // 30th element (i.e., number 30)
  });

  it("should return the number for non-multiples of 3 or 5", function () {
    const result = fizzBuzz();
    assert.equal(result[0], 1); // 1st element
    assert.equal(result[1], 2); // 2nd element
    assert.equal(result[3], 4); // 4th element
  });
});
