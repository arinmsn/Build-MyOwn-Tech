/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n - digit numbers.
*/

function isPalindromeNumber(number) {
    const str = number.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function largestPalindromeProduct(n) {
    const min = Math.pow(10, n - 1);
    const max = Math.pow(10, n) - 1;

    let largestPalindrome = 0;

    for (let i = max; i >= min; i--) {
        for (let j = i; j >= min; j--) {
            let product = i * j;

            if (isPalindromeNumber(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

module.exports = {
    isPalindromeNumber,
    largestPalindromeProduct
};

/*
Time complexity:  Since, we have two nested loops, the time complexity of this function is O(n^2). They iterate from the maximum value down to the minimum value, where n is the input parameter. 

Space complexity: O(1) because the function only uses a constant amount of extra space.
*/