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

  peek(){
    if(this.head) {return this.head.value;}
  }
}

class Queue {
  constructor(){
    this.mainStack = new Stack();
    this.head = this.mainStack.head;
  }

  enqueue(val){
    const shadowStack = new Stack();
    while(this.mainStack.head !== null){
      shadowStack.push(this.mainStack.pop());
    }
    this.mainStack.push(val);
    while(shadowStack.head !== null){
      this.mainStack.push(shadowStack.pop());
    }
    this.head = this.mainStack.head;
  }

  dequeue(){
    this.head = this.head.next;
    return this.mainStack.pop();
  }
}

module.exports = {
  Stack,
  Queue
};
