/*
Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false; // Exclude even numbers

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
    let primes = [];
    let number = 2;

    while (primes.length < n) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }

    return primes[primes.length - 1];
}

module.exports = {
    isPrime, nthPrime
}

/*
For the iPrime() function:
    Time complexity: O(sqrt(n)) - the loop that starts from 3 to the sq. root of the input number and checks the divisiblity of each number.
    Space complexity: O(1)

 For the nthPrime() function:
    Time complexity: Approx. O(n * sqrt(n))
    Space complexity: O(1)
*/