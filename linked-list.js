/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
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
      this.length = 0;
    } else {
      let currentNode = this.head;
      let newFinal = this.head;
      while (currentNode !== this.tail) {
        newFinal = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newFinal;
      this.length--;
      toReturn = currentNode.val;
    }
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
      this.length = 0;
    } else {
      toReturn = this.head.val;
      this.head = this.head.next;
      this.length--;
    }
    return toReturn;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) throw new Error("This list is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index invalid.");

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) throw new Error("This list is empty.");
    if (idx >= this.length || idx < 0) throw new Error("Index invalid.");

    let currentNode = this.head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
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
    if ((idx !== 0 && idx > this.length) || idx < 0) throw new Error("Index invalid.");

    let currentNode = this.head;
    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }

    if ((!currentNode) || (currentNode === this.tail)) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let tempNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = tempNode;
    }
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
        this.head = this.head.next;
      }
      this.length--;
      return toReturn;
    }

    let currentNode = this.head;
    let prevNode = this.head

    for (let i = 0; i < idx - 1; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === this.tail) {
      toReturn = this.tail.val;
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      toReturn = currentNode.val;
      prevNode.next = currentNode.next;
    }
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

module.exports = LinkedList;
