const assert = require('assert');
const multiplesOf3Or5 = require('./problem1_multiplesOf_3or5');

// Test cases
describe('multiplesOf3Or5', function () {
    it('should return a number', function () {
        const result = multiplesOf3Or5(15);
        assert.strictEqual(typeof result, 'number');
    });

    it('should handle negative numbers correctly', function () {
        const result = multiplesOf3Or5(-100);
        assert.strictEqual(result, 0);
    });

    it('should handle zero correctly', function () {
        const result = multiplesOf3Or5(0);
        assert.strictEqual(result, 0);
    });

    it('should handle large numbers correctly', function () {
        const result = multiplesOf3Or5(1000);
        assert.strictEqual(result, 233168);
    });

    it('should handle small positive numbers correctly', function () {
        assert.strictEqual(multiplesOf3Or5(10),23);
        assert.strictEqual(multiplesOf3Or5(15),45);
        assert.strictEqual(multiplesOf3Or5(20),78);
        assert.strictEqual(multiplesOf3Or5(25),143);
        assert.strictEqual(multiplesOf3Or5(30),195);
        assert.strictEqual(multiplesOf3Or5(50),543);
        assert.strictEqual(multiplesOf3Or5(100),2318);
        assert.strictEqual(multiplesOf3Or5(200),9168);
        assert.strictEqual(multiplesOf3Or5(500),57918);
    })
})