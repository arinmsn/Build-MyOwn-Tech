/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

function largestPrimeFactor(number) {
    let largestFactor = 1;

    // Remove all factors of 2
    while (number % 2 == 0) {
        largestFactor = 2;
        number = number / 2;
    }

    // Check odd factors from 3 and up
    let factor = 3;
    // This will ensure that we only check divisors up to the (number)^2
    // by the smallest possible odd factors.
    while (factor * factor <= number) {
        // This will remove all factors of the current odd factor
        while (number % factor === 0) {
            largestFactor = factor;
            number = number / factor;
        }
        factor += 2;
    }
   
    // If number is still greater than 1, then it's a prime.
    if (number > 1) {
        largestFactor = number;
    }

    return largestFactor;
}

module.exports = largestPrimeFactor;

/*

Time complexity: O(n^2) where n is our input. We iterate through all the odd factors up to the square root of the number.
Space complexity: O(1) because we are using a constant amount of extra space.

*/
