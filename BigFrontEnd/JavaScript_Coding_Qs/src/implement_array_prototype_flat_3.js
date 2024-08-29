/*
There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

Follow up: Are you able to solve it both recursively and iteratively?
*/


// The resursive way
function flatRecursive(arr, depth = 1) {
    return arr.reduce((result, item) => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flat(item, depth - 1))
        } else {
            result.push(item)
        }
        return result
    }, [])
}

function flatIterative(arr, depth = 1) {
    // Attach depth to each item
    const result = arr.map((item) => [item, depth])

    const end = Symbol('end')
    result.push(end)

    while (result.length > 0) {
        const head = result.shift()
        if (head == end) {
            break
        }
        const [item, itemStep] = head
        // if item is an array and we can flatten further
        // then put its items back with a less depth
        if (Array.isArray(item) && itemStep > 0) {
            result.unshift(...item.map((arrayItem) => [arrayItem, itemStep - 1]))
        } else {
            result.push(item)
        }
    }
    return result
}

/*
console.log([1, [2], [3, [4]]].flatRecursive());
console.log([1, [2], [3, [4]]].flatRecursive(1));
console.log([1, [2], [3, [4]]].flatRecursive(2));
console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].flatRecursive(Infinity));
*/

console.log(flatIterative([1, [2], [3, [4]]]));
console.log(flatIterative([1, [2], [3, [4]]], 1));
console.log(flatIterative([1, [2], [3, [4]]], 2));
console.log(flatIterative([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity));






 