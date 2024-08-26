/*

Object.groupBy() allows us to easily group array items, please try to implement it by yourself.



*/

/**
 * @template T
 * @template { keyof any } K
 * @param { Array<T> } items
 * @param { (item: T) => K } callback
 * @returns { Record<K, Array<T>> }
 */

const items = [
    { id: 1, kind: 'a' },
    { id: 2, kind: 'b' },
    { id: 3, kind: 'a' },
    { id: 4, kind: 'c' },
    { id: 5, kind: 'b' },
];

function ObjectGroupBy(items, callback) {
    // Ensure that the object has a null prototype
    const result = Object.create(null);

    for (let item in items) {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

const groups = ObjectGroupBy(items, item => item.id % 2 == 0 ? 'even' : 'odd');
console.log(groups);

module.exports = ObjectGroupBy;