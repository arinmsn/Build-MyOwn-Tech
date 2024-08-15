const assert = require('assert');
const largestPrimeFactor = require('./largestPrimeFactor')

// Test cases
describe('largestPrimeFactor', function () {
    it('should return a number', function () {
        result = largestPrimeFactor(2);
        assert.strictEqual(typeof result, 'number');
    });

    it('should handle small positive numbers', function () {
        assert.strictEqual(largestPrimeFactor(2),2);
        assert.strictEqual(largestPrimeFactor(3),3);
        assert.strictEqual(largestPrimeFactor(5),5);
        assert.strictEqual(largestPrimeFactor(7),7);
        assert.strictEqual(largestPrimeFactor(8),2);
        assert.strictEqual(largestPrimeFactor(13195),29);
    })

    it('should handle large positive numbers', function () {
        assert.strictEqual(largestPrimeFactor(600851475143), 6857);
        assert.strictEqual(largestPrimeFactor(1234567891011), 630803);
        assert.strictEqual(largestPrimeFactor(987654321987), 999809);
        assert.strictEqual(largestPrimeFactor(1000000000039), 1000000000039);
        assert.strictEqual(largestPrimeFactor(7427466391), 7427466391);
    })
});