const assert = require('assert');
const { isPalindromeNumber, largestPalindromeProduct } = require('./largestPalindromeProduct');

// Test cases
describe('Largest Palindrome Tests', function () {
	it('should correctly identify a palindrome number', function () {
		assert.strictEqual(isPalindromeNumber(121), true);
		assert.strictEqual(isPalindromeNumber(131), true);
		assert.strictEqual(isPalindromeNumber(242), true);
		assert.strictEqual(isPalindromeNumber(3553), true);
		assert.strictEqual(isPalindromeNumber(4664), true);
		assert.strictEqual(isPalindromeNumber(5775), true);
		assert.strictEqual(isPalindromeNumber(6886), true);
		assert.strictEqual(isPalindromeNumber(7997), true);
		assert.strictEqual(isPalindromeNumber(9009), true);
		assert.strictEqual(isPalindromeNumber(12321), true);
		assert.strictEqual(isPalindromeNumber(45654), true);
		assert.strictEqual(isPalindromeNumber(123), false);
		assert.strictEqual(isPalindromeNumber(234), false);
		assert.strictEqual(isPalindromeNumber(3456), false);
		assert.strictEqual(isPalindromeNumber(5678), false);
		assert.strictEqual(isPalindromeNumber(6789), false);
		assert.strictEqual(isPalindromeNumber(7890), false);
		assert.strictEqual(isPalindromeNumber(8901), false);
		assert.strictEqual(isPalindromeNumber(9012), false);
		assert.strictEqual(isPalindromeNumber(12345), false);
		assert.strictEqual(isPalindromeNumber(45678), false);
	});

	it('should find the largest palindrome product for 2-digit numbers', function () {
		assert.strictEqual(largestPalindromeProduct(2), 9009);
	});

	it('should find the largest palindrome product for 3-digit numbers', function () {
		assert.strictEqual(largestPalindromeProduct(3), 906609);
	});
});