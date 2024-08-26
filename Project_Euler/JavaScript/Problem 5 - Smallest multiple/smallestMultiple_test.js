const assert = require('assert');
const { gcd, lcm, smallestMult } = require('./smallestMultiple');

// Test cases
describe('The greatest common divisor (GCD) tests', function () {
    it('should return 1 for gcd(1, 1)', function () {
        assert.strictEqual(gcd(1, 1), 1);
    });

    it('should return 4 for gcd(8, 12)', function () {
        assert.strictEqual(gcd(8, 12), 4);
    });

    it('should return 6 for gcd(54, 24)', function () {
        assert.strictEqual(gcd(54, 24), 6);
    });

    it('should return 1 for gcd(101, 103)', function () {
        assert.strictEqual(gcd(101, 103), 1);
    });

    it('should return 10 for gcd(0, 10)', function () {
        assert.strictEqual(gcd(0, 10), 10);
    });
});

describe('Least common multiple (LCM) tests', function () {
    it('should return 1 for lcm(1, 1)', function () {
        assert.strictEqual(lcm(1, 1), 1);
    });

    it('should return 12 for lcm(4, 6)', function () {
        assert.strictEqual(lcm(4, 6), 12);
    });

    it('should return 42 for lcm(21, 6)', function () {
        assert.strictEqual(lcm(21, 6), 42);
    });

    it('should return 24 for lcm(8, 12)', function () {
        assert.strictEqual(lcm(8, 12), 24);
    });

    it('should return 35 for lcm(7, 5)', function () {
        assert.strictEqual(lcm(7, 5), 35);
    });
});
describe('Smallest multiple tests', function () {
    it('should return a number', function () {
        const result = smallestMult(5);
        assert.strictEqual(typeof result, 'number');
    });

    it('should return the smallests multiple', function () {
        assert.strictEqual(smallestMult(5), 60);
        assert.strictEqual(smallestMult(7), 420);
        assert.strictEqual(smallestMult(10), 2520);
        assert.strictEqual(smallestMult(13), 360360);
        assert.strictEqual(smallestMult(20), 232792560);
    });
});
  