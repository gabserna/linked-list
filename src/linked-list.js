class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    const newNode = new LinkedListNode(data, null);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }
  

  remove(data) {
    let currentNode = this.head;
    let previo = null;
  
    while (currentNode != null) {
      if (currentNode.data === data) {
        if (!previo) {
          this.head = currentNode.next;
        } else {
          previo.next = currentNode.next;
        }
        previo = currentNode;
        currentNode = currentNode.next;
      }
      this.size--;
      return currentNode.data;
    }
    return null;
  }
  

  contains(data) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }


  toString() {
    let result = "";
    let currentNode = this.head;
    while (currentNode != null) {
      result += currentNode.data + " ";
      currentNode = currentNode.next;
    }
    result += "null";
    return result;
  }
}


/* 
let linkedList = new LinkedList();
linkedList.insert(5);
linkedList.insert(10);
linkedList.insert(14);
console.log(linkedList.toString()); // "5 10 14 null"
console.log(linkedList.contains(10)); // true
console.log(linkedList.contains(20)); // false
linkedList.remove(10);
console.log(linkedList.toString()); // "5 14 null"
 */