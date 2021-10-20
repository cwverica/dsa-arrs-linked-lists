function reverseLinkedList(linkedList) {
    let currentNode = linkedList.head;
    let prevNode = null;
    let finishTail = linkedList.head;

    while (currentNode) {
        if (!currentNode.next) {
            currentNode.next = prevNode;
            linkedList.head = currentNode;
            linkedList.tail = finishTail;
            break;
        } else {
            let tempNext = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNext;
        }
    }
}

module.exports = reverseLinkedList;