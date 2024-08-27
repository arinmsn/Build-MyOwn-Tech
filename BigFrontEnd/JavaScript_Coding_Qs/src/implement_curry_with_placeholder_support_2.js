/*

This is a follow-up on 1. implement curry()

please implement curry() which also supports placeholder.

Here is an example

const  join = (a, b, c) => {   return `${a}_${b}_${c}`}const curriedJoin = curry(join)const _ = curry.placeholdercurriedJoin(1, 2, 3) // '1_2_3'curriedJoin(_, 2)(1, 3) // '1_2_3'curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

more to read

https://javascript.info/currying-partials

https://lodash.com/docs/4.17.15#curry

https://github.com/planttheidea/curriable


*/

function curry(fn) {
    return function curried(...args) {
        // if # of arguments match
        if (isArgsMet(args, fn, curry.placeholder)) {
            return fn.call(this, ...args);
        }
        // Otherwise return a function which merges the args
        return function (...nextArgs) {
            const mergedArgs = mergeArgs(args, nextArgs, curry.placeholder);
            return curried.call(this, ...mergedArgs);
        }
    }
}

curry.placeholder = Symbol()


function mergeArgs(argsTo, argsFrom, placeholder) {
    const mappedArgsTo = argsTo.map((item) =>
        item === placeholder && argsFrom.length ? argsFrom.shift() : item
    )
    return [...mappedArgsTo, ...argsFrom]
}
function isArgsMet(args, fn, placeholder) {
    if (args.length < fn.length) {
        return false
    }

    /*
    for (let i = 0; i < fn.length; i++) {
        if (args[i] === placeholder) {
            return false
        }
    }
    return true
    */
    // Above is simplified as below
    return args.slice(0, fn.length).every((item) => item != placeholder)
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3);// '1_2_3'
curriedJoin(_, 2)(1, 3);// '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

console.log(curriedJoin(1, 2, 3));      // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3));   // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2));     // '1_2_3'
/* 
    Array.prototype.shift() requires some index shifting, so it will not be constant time.
    If internal implementation is linked list, then it is constant, but generally we should
    not just assume. We can avoid the issue by using reverse() and pop() instead.

    If we ignore the above mentioned issue, then our time complexity will stay at O(m + n).
*/