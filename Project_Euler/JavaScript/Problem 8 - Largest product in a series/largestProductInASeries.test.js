const assert = require("assert");
const { largestProductinaSeries } = require("./largestProductInASeries");

// Test cases
describe('Calculate the largest product in a large series', function () {

    it('should return a number', function () {
        const result = largestProductinaSeries(4);
        assert.strictEqual(typeof result, 'number');
    });

});