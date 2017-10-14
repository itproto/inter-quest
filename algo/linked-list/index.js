const test = require('../utils').test;

class LNode {
    constructor(data, next) {
        this.next = next;
        this.data = data;
    }

    static from(...args) {
        let arr = args;
        const head = new LNode();
        let cur = head;
        let prev = undefined;
        arr.forEach((data) => {
            cur.data = data;
            if (prev) {
                prev.next = cur;
            }
            prev = cur;
            cur = new LNode();
        });
        return head;
    }

    toArray() {
        let cur = this;
        let res = []
        while (cur) {
            res.push(cur.data)
            cur = cur.next;
        }
        return res;
    }
}

test('Test Linked List', () => {
    const ll = LNode.from(2, 3, 5, 10, 15, 20);
    console.log(ll.toArray());
});

//1. Merging 2 linke lists
/*
Input: 5->15 2->3->10->20
Res: 2->3->5->10->15->20
*/
test('Merge Linked List', () => {
    const ll1 = LNode.from(5, 15);
    const ll2 = LNode.from(2, 3, 10, 20);
    const merged = mergeLL(ll1, ll2);
    console.log(merged.toArray());
});

function mergeLL(ll1, ll2) {
    let cur1 = ll1, cur2 = ll2;
    let cur, head;
    while (cur1 || cur2) {
        let target;
        if (!cur1) {
            target = cur2;
        } else if (!cur2) {
            target = cur1;
        } else {
            target = cur1.data <= cur2.data ? cur1 : cur2;
        }

        if (target === cur1) {
            cur1 = cur1.next;
        } else {
            cur2 = cur2.next;
        }

        if (cur) {
            cur.next = target;
            cur = target;
        } else {
            head = cur = target;
        }
        console.info(target.data)

    }
    return head;
}





