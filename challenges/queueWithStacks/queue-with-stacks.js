class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.head = null;
  }

  push(val){
    let current = this.head;
    this.head = new Node(val);
    this.head.next = current;
  }

  pop(){
    const toReturn = this.head.value;
    this.head = this.head.next;
    return toReturn;
  }
}

class Queue {

}

module.exports = {
  Stack,
  Queue
};
