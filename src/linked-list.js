class LinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;   //null ?
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


  remove(key) {    //data or key?
    let currentNode = this.head;
    let prevNode;
    let now = false;
    let nextNode = currentNode?.next;

    while (currentNode && !now) {
      now = key === currentNode.data.key; //checar ???

      if (now) {
        now = true;
      } else {
        prevNode = currentNode;
        currentNode = prevNode?.next;
        nextNode = prevNode?.next?.next;
      }
    }
    if (now) {
      this.size = this.size - 1;
    }
    if (now && prevNode) {
      prevNode.next = nextNode;
    } else if (now && !prevNode) {
      this.head = nextNode;
    } else {
      console.log('not round');
    }

  }

  contains(key) {
    let currentNode = this.head;
    while (currentNode) {
      let itIsHere = currentNode.data.key === key;

      if (itIsHere) {
        return currentNode.data;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
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
// to compare
remove(data) {
  let currentNode = this.head;
  let prevNode = null;

  while (currentNode !== null) {
    if (currentNode.data === data) {
      if (prevNode === null) {
        this.head = currentNode.next;
      } else {
        prevNode.next = currentNode.next;
      }
      this.size--;
      return currentNode.data;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

 */