
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

//4. Given a sorted array and a number x, find a pair in array whose sum is closest to x.
/*
Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
Output: 22 and 30

Input: arr[] = {1, 3, 4, 7, 10}, x = 15
Output: 4 and 10
*/

/*
1.Idea: O(n)
a.Start back, find a < x
b.Start forward, a + b <= x 
c. If a+b > x
*/

function findClosest(arr, x) {
    var i = 0, j = arr.length - 1;
    //1. find back-start
    while (j > 0) {
        if (arr[j] + arr[0] > x) {
            j--;
        } else {
            break
        }
    }
    //2.
    let diff = Number.MAX_VALUE;
    let curBest;
    for (let k = j; k > 0; k--) {
        const i = findBest(k, arr, x);
        const newSum = arr[k] + arr[i];
        if (x - newSum < diff) {
            diff = x - newSum;
            curBest = [arr[k], arr[i]];
        }
    }
    return curBest;
}

function findBest(j, arr, x) {
    const val = arr[j];
    for (var i = 0; i < j; i++) {
        if (arr[i] + val > x) {
            return i - 1;
        }
    }

}

test('Task 4. Find closest', () => {
    console.info(findClosest([10, 22, 28, 29, 30, 40], 54));
    console.info(findClosest([1, 3, 4, 7, 10], 15));
});

/*
Stock Buy Sell to Maximize Profit
The cost of a stock on each day is given in an array, 
find the max profit that you can make by buying and selling in those days. 
For example, if the given array is {100, 180, 260, 310, 40, 535, 695},
 the maximum profit can earned by buying on day 0, selling on djjjay 3. 
 Again buy on day 4 and sell on day 6. 
 If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.


 Solution:
 1. traverse forward. Buy first stock (a[i-1]<a[i])
 2. sell when a[i] > a[i+1] (otherwise sell on last day)
 3. Back to 1 
*/

function stockStrategy(arr) {
    if (!arr || arr.length === 1) {
        return [];
    }
    if (arr.length === 2) {
        if (arr[0] < arr[1]) {
            return arr;
        }
        return [];
    }
    let bought = false, transactions = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            if (bought) {
                transactions.push(i);
                bought = false;
            }
            break;
        }
        if (!bought) {
            if (arr[i] > arr[i + 1]) {
                continue;
            } else {
                transactions.push(i);
                bought = true;
            }
        } else {
            if (arr[i] > arr[i + 1]) {
                transactions.push(i);
                bought = false;
            }
        }
    }
    return transactions;
}
test('Task 5. Stock strategy', () => {
    console.info(stockStrategy([100, 180, 260, 310, 40, 535, 695]));
});


/*
Given an unsorted array of non-negative integers, 
find a continuous sub-array which adds to a given number.

[12, 3, 5, 10, 22, 11, 25] x=37

Idea:
- 2 cursors
- start from cur1=0 (>x next || ==x return) 
- start cur2 until arr[cur1] + arr[cur2] ==(SUCC) or > x (prev step)
*/
function getSubarrayThatAddsTo(x, src) {
    const arr = src.concat([]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            continue;
        }
        if (arr[i] === x) {
            return [arr[i]];
        }
        let sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > x) {
                break;
            }
            if (sum === x) {
                return arr.slice(i, j + 1);
            }
        }
    }
    return [];
}
test('Task 6. Subarr that adds', () => {
    const arr = [12, 3, 5, 10, 22, 11, 25];
    console.info(getSubarrayThatAddsTo(18, arr));
});

/*
Key Pair

Given an array A[] of n numbers and another number x, 
determine whether or not there exist two elements in A whose sum is exactly x.
16
1 4 45 6 10 8
10
1 2 4 3 6

1.Idea:
Brute-force: n2
Too easy
2. 
a. sort array
b. find highest > x (lookup back, binary search)
c. start from i=0 until arr[i] + arr[j] >= x
d. start from j again
*/
function hasKeyPair(src, x) {
    const arr = src.concat([]);
    //a.NlogN
    arr.sort();
    //b. find highest
    let j = findHighestInSorted(arr, x);
    //TOD: Finish it

}

//TODO: Implement it
function findHighestInSorted(arr, x) {
    let mid = arr.length / 2;
    //left should be <x, right >x
}

/*
Next larger element
Given an array A [] having distinct elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.
If no such element exists, output -1 
*/