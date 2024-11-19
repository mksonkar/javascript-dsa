class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  delete(value) {
    // empty list
    if (this.head === null) {
      return "List is empty";
    }
    let currentNode = this.head;

    // head is to be deleted
    if (currentNode.value === value) {
      this.head = null;
      this.size--;
      return "Node deleted";
    }

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        let deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
        deletedNode.next = null;
        this.size--;
        return "Node deleted";
      }
      currentNode = currentNode.next;
    }
    return "Value not present";
  }

  print() {
    if (this.head === null) {
      console.log("Empty list");
      return;
    }
    let res = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      res += currentNode.value + (currentNode.next && " -> ");
      currentNode = currentNode.next;
    }
    console.log(res);
  }
}

let myList = new LinkedList();
myList.append(4);
myList.append(5);
myList.append(6);
myList.append(7);
myList.prepend(3);
myList.prepend(2);
myList.prepend(1);
console.log(myList.size);
myList.insert(myList.size, "A");
myList.print();
