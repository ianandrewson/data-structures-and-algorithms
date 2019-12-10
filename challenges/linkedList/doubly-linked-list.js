class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.current = this.head;
  }

  insert(val){
    this.current = this.head;
    this.head = new Node(val, this.current, null);
    this.current = this.head;
  }

  includes(val){
    this.current = this.head;
    while(this.current !== null){
      if(this.current.value === val){
        return true;
      } else {
        this.current = this.current.next;
      }
    }
  }

  append(val){
    this.current = this.head;
    while(this.current !== null){
      if(this.current.next === null) {
        this.current.next = new Node(val, null, this.current);
        this.current = this.head;
        break;
      } else this.current = this.current.next;
    }
  }

  insertBefore(val, newValue){
    if(!this.includes(val)){
      throw new Error('Value to insert before was not found.');
    }
    this.current = this.head;
    while(this.current !== null){
      if(this.current.next.value === val){
        this.current.next = new Node(newValue, this.current.next, this.current);
        break;
      } else this.current = this.current.next;
    }
  }

  insertAfter(val, newValue){
    if(!this.includes(val)){
      throw new Error('Value to insert after was not found.');
    }
    this.current = this.head;
    while(this.current !== null){
      if(this.current.value === val){
        this.current.next = new Node(newValue, this.current.next, this.current);
        break;
      } else this.current = this.current.next;
    }
  }

  delete(val){
    this.current = this.head;
    while(this.current !== null){
      if(this.current.next.value === val){
        this.current.previous = this.current;
        this.current.next = this.current.next.next;
        break;
      } else this.current = this.current.next;
    }
  }

  toString() {
    this.current = this.head;
    let result = '';
    while(this.current !== null){
      result += this.current.value + ' ';
      this.current = this.current.next;
    }
    return result.trimRight();
  }

  kthFromEnd(num) {
    if(num < 0){
      throw new Error('number cannot be negative');
    }
    this.current = this.head;
    if(this.current.next === null && this.current.previous === null) {
      return this.current.value;
    }
    while(this.current.next !== null){
      this.current = this.current.next;
    }
    for(let i = 1; i < num; i++){
      this.current = this.current.previous;
    }
    return this.current.value;
  }

  middleNode() {
    this.current = this.head;
    let length = 0;
    if(this.current === null) {
      throw new Error ('list is empty');
    }
    while(this.current !== null){
      length++;
      this.current = this.current.next;
    }
    console.log(length);
    return this.kthFromEnd(Math.floor(length / 2) + 1);
  }
}

class Node {
  constructor(value, next, previous){
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

module.exports = {
  DoublyLinkedList,
  Node
};
