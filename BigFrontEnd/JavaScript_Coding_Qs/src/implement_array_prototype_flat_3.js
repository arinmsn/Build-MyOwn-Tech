/*
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

Follow up: Are you able to solve it both recursively and iteratively?
*/

function flat(arr, depth = 1) {
    return arr.reduce((result, item) => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flat(item, depth - 1))
        } else {
            result.push(item)
        }
        return result
    }, [])
}


console.log([1, [2], [3, [4]]].flat());
console.log([1, [2], [3, [4]]].flat(1));
console.log([1, [2], [3, [4]]].flat(2));
console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flat(Infinity));







 