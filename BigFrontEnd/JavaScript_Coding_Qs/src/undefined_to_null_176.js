/*
One of the differences between null and undefined is how they are treated differently in JSON.stringify().

JSON.stringify({a: null})      // '{"a":null}'JSON.stringify({a: undefined}) // '{}'JSON.stringify([null])         // '[null]'JSON.stringify([undefined])    // '[null]'

This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.

You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

undefinedToNull({a: undefined, b: 'BFE.dev'})// {a: null, b: 'BFE.dev'}undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})// {a: ['BFE.dev', null, 'bigfrontend.dev']}
*/


/**
 * @param {any} arg
 * @returns {any}
 */
function undefinedToNull(arg) {
    if (arg === undefined) {
        return null;
    }

    if (Array.isArray(arg)) {
        return arg.map(undefinedToNull);
    }

    if (typeof arg === 'object' && arg !== null) {
        const result = {};
        for (let key in arg) {
            if (arg.hasOwnProperty(key)) {
                result[key] = undefinedToNull(arg[key]);
            }
        }
        return result;
    }
    return arg;
}

const obj_1 = { a: undefined, b: 'BFE.dev' };
const result_1 = undefinedToNull(obj_1);
console.log(result_1);

const obj_2 = { a: ['BFE.dev', undefined, 'bigfrontend.dev'] };
const result_2 = undefinedToNull(obj_2);
console.log(result_2);