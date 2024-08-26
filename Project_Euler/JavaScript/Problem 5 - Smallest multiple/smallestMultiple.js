// Calculate the greatest common divisor (GCD)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Calculate the least common multiple (LCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestMult(n) {
    let smallest = 1;
    for (let i = 2; i <= n; i++) {
        smallest = lcm(smallest, i);
    }
    return smallest;
}

module.exports = { gcd, lcm, smallestMult };

/*
Time complexity: For smallestMult() function: O(n^2) because we have two nested loops, the outher loop runs from 2 -> n and inner loop calls 'lcm' function which has a time complexity of O(log(min(a,b))). LCM function is called for each number from 2 to n; therefore, overall time complexity is O(n^2).
Space complexity: 'smallestMult' function is O(1).
*/
