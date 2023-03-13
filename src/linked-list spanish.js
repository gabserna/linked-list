class Node {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newNode = new Node(data, null);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    delete(data) {
        let current = this.head;
        let previo = null;

        while(current != null) {
            if (current.data === data) {
                if (!previo) {
                    this.head = current.next;
                } else {
                    previo.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previo = current;
            current = current.next;
        }
        return null;
    }
}

let list = new linkedList();
console.log(list); // linkedList {head: null, size: 0}
list.add(10);
list.add(5);
console.log(list); // linkedList {head: Node {data: 10, next: Node {data: 5, next: null}}, size: 2}
list.delete(5);
console.log(list); // linkedList {head: Node {data: 10, next: null}, size: 1}

/*
linkedList { head: null, size: 0 }
linkedList { head: Node { data: 10, next: Node { data: 5, next: null } }, size: 2 }
linkedList { head: Node { data: 10, next: null }, size: 1 }
*/
