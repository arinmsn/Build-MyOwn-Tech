const assert = require("assert");
const { isPrime, nthPrime } = require("./n_th_prime");
const { eventNames } = require("process");

describe('Determine correctly if a number is a prime', function () {

    it('should return a boolean', function () {
        const result = isPrime(6);
        assert.strictEqual(typeof result, 'boolean');
    })

    it('should return false for numbers less than or equal to 1', function () {
        assert.strictEqual(isPrime(0), false);
        assert.strictEqual(isPrime(-1), false);
        assert.strictEqual(isPrime(-100), false);
    })

    it('should return false for some even number', function () {
        const evenNumbers = [4, 6, 8, 10, 12];   // Except number 2
        evenNumbers.forEach(num => {
            const result = isPrime(num);
            assert.strictEqual(result, false);
        });
    })

    it('should return true for actual prime numbers', function () {
        const somePrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        somePrimeNumbers.forEach(num => {
            const result = isPrime(num);
            assert.strictEqual(result, true);
        });
    });
})

describe('Correctly calculate the n-th prime number', function () {
    it('should return a number', function () {
        const result = nthPrime(6);
        assert.strictEqual(typeof result, 'number');
    })

    it('should handle some positive numbers correctly', function () {
        assert.strictEqual(nthPrime(6), 13);
        assert.strictEqual(nthPrime(10), 29);
        assert.strictEqual(nthPrime(100), 541);
        assert.strictEqual(nthPrime(1000), 7919);
        assert.strictEqual(nthPrime(10001), 104743);
    })
})