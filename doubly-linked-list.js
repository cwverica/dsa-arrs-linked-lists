/** Node: node for a doubly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("This list is empty.");

    let toReturn;

    if (this.head === this.tail) {
      toReturn = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      toReturn = this.tail.val;
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return toReturn;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("This list is empty.");

    let toReturn;

    if (this.head === this.tail) {
      toReturn = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      toReturn = this.head.val;
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return toReturn;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("This list is empty.");

    let currentNode;
    if (idx >= this.length || idx < 0) throw new Error("Index invalid.");
    if (idx <= (this.length / 2)) {
      currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) throw new Error("This list is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index invalid.");

    let currentNode;
    if (idx <= (this.length / 2)) {
      currentNode = this.head;
      for (let i = 0; i < idx; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currentNode = currentNode.prev;
      }
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);

    if (!this.head) {
      if (idx !== 0) {
        throw new Error("Index Invalid");
      }
      this.head = newNode;
      this.tail = newNode;
    }
    if (idx > this.length || idx < 0) throw new Error("Index invalid.");
    if (idx === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return;
    }
    let currentNode;
    if (idx <= (this.length / 2)) {
      currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        currentNode = currentNode.prev;
      }
    }
    let tempNode = currentNode.next;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    newNode.next = tempNode;
    tempNode.prev = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (!this.head) throw new Error("This list is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index invalid.");
    let toReturn;

    if (idx === 0) {
      toReturn = this.head.val;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head.next.prev = null;
        this.head = this.head.next;
      }
      this.length--;
      return toReturn;
    }

    if (idx === (this.length - 1)) {
      toReturn = this.tail.val;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length--;
      return toReturn;
    }

    let currentNode = this.head;
    let prevNode = this.head

    if (idx <= (this.length / 2)) {
      for (let i = 0; i < idx - 1; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    } else {
      for (let i = this.length - 1; i > idx - 1; i--) {
        currentNode = prevNode;
        prevNode = currentNode.prev;
      }
    }
    toReturn = currentNode.val;
    prevNode.next = currentNode.next;
    this.length--;
    return toReturn;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0, elements = 0;
    let currentNode = this.head;

    if (!this.head) return 0;
    do {
      sum = sum + currentNode.val;
      elements++;
      currentNode = currentNode.next;
    } while (currentNode);
    return (sum / elements);
  }

}

module.exports = DoublyLinkedList;