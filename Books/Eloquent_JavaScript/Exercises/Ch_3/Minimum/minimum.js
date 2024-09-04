/*
Minimum


The previous chapter introduced the standard function Math.min that 
returns its smallest argument. We can write a function like that ourselves
now. Define the function min that takes two arguments and returns their minimum.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/
function minimum(a, b) {
  if (a < b) return a;
  return b;
}

module.exports = minimum;
