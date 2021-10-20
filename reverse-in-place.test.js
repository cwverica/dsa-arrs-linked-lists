const LinkedList = require("./linked-list");
const reverseLinkedList = require('./reverse-in-place');

describe("reverse in place", function () {
    it("reverse list in place", function () {
        let lst = new LinkedList([1, 2, 3, 4, 5]);

        reverseLinkedList(lst);
        expect(lst.head.val).toBe(5);
        expect(lst.tail.val).toBe(1);
        expect(lst.head.next.val).toBe(4);
        expect(lst.head.next.next.val).toBe(3);
        expect(lst.head.next.next.next.val).toBe(2);
        expect(lst.head.next.next.next.next.val).toBe(1);


    });
});
