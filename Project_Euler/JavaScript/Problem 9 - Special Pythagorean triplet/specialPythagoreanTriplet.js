/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

*/

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  for (let a = 1; a < n - 2; a++) {
    for (let b = a + 1; b < n - 1; b++) {
      let c = sumOfabc - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
  return -1; // In case we don't find any results
}

module.exports = specialPythagoreanTriplet;
