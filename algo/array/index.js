
const test = require('./../utils').test;
//https://github.com/yangshun/tech-interview-handbook/blob/master/algorithms/array.md
//1. In an arrays of arrays, e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []],
// print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
const printNestedArray = (arr) => {
    const res = [];
    arr.forEach((innerArr) => {
        innerArr.forEach((el) => {
            res.push(el);
        });
    });
    console.log(res);
}
const arr1 = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []];
test('Array. Task 1', () => printNestedArray(arr1));

//2.Implement an iterator that supports hasNext(), next() and remove() methods.
const iter = (arr) => {
    let idx = 0;

    return {
        next: () => {
            idx++;
            return arr[idx];
        },
        hasNext: () => {
            return idx + 1 < arr.length;
        },
        remove: () => {
            arr.splice(idx, 1);
        }
    };
};

test('Task 2', () => {
    const it = iter([1, 2, 3, 4, 5, 6]);
    const res = [];
    while (it.hasNext()) {
        res.push(it.next());
    }
    console.log(res);
});

//3. Given a list of item prices, find all possible combinations of items that sum a particular value K.
const itemPrices = {

};
