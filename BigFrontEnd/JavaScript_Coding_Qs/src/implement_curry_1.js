/*

Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {   return `${a}_${b}_${c}`}const curriedJoin = curry(join)curriedJoin(1, 2, 3) // '1_2_3'curriedJoin(1)(2, 3) // '1_2_3'curriedJoin(1, 2)(3) // '1_2_3'

more to read

https://javascript.info/currying-partials

https://lodash.com/docs/4.17.15#curry

*/

const measurePerformance = require("./helpers/measure_performance");

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

function curry(fn){
	return function curried(...args){
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		} else {
			return function(...nextArgs){
				return curried.apply(this, args.concat(nextArgs));
			}
		}
	}
}

function curry_ver2(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.call(this, ...args);
		}
		return curred.bind(this, ...args);
	}
}

const join = (a, b, c) => {
	return `${a}_${b}_${c}`
}

const curriedJoin = curry(join);
const curriedJoin_ver2 = curry_ver2(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2)(3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'

measurePerformance(curriedJoin, 1, 2, 3);		// 0.163ms -- 0.001846 MB
measurePerformance(curriedJoin_ver2, 1, 2, 3);	// 0.051ms -- 0.000389 MB