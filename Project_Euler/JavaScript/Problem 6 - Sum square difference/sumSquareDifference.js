/*

Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.


*/

function sumSquareDifference(n) {
	// Convert the 0-based indext to 1-based
	const numbers = [...Array(n).keys()].map(x => x + 1);

	const sumOfSquares = numbers.reduce((sum, x) => sum + x * x, 0);
	const squareOfSum = Math.pow(numbers.reduce((sum, x) => sum + x, 0), 2)

	return squareOfSum - sumOfSquares;
}

module.exports = { sumSquareDifference };


/*
Time complexity: O(n); we iterate over numbers array twice, to calculate the sum of squares and once more to calculate the suqare of the sum.
Space complexity: O(n); numbers array is crated with length of n.

*/