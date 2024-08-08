function multiplesOf3Or5(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

/* Time complexity of this funciton is O(n). Space complexity is O(1) since the space used is constant regardless of how large the number becomes.
*/

module.exports = multiplesOf3Or5;