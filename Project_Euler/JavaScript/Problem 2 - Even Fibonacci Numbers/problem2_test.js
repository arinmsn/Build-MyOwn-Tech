const assert = require('assert');
const fiboEvenSum = require('./problem2_fiboEvenSum');

// Test cases
describe('fiboEvenSum', function () {
    it('should return a number', function () {
        const result = fiboEvenSum(10);
        assert.strictEqual(typeof result, 'number');
    });

    it('should handle small positive numbers correctly', function () {
        assert.strictEqual(fiboEvenSum(10), 10);
        assert.strictEqual(fiboEvenSum(34), 44);
        assert.strictEqual(fiboEvenSum(60), 44);
    })

    it('should handle large positive numbers correctly', function () {
        assert.strictEqual(fiboEvenSum(1000), 798);
        assert.strictEqual(fiboEvenSum(100000), 60696);
        assert.strictEqual(fiboEvenSum(4000000), 4613732);
    })
})