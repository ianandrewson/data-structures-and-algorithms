class LinkedList {
  constructor(){
    this.head = null;
    this.current = this.head;
  }

  insert(val){
    this.current = this.head;
    this.head = new Node(val, this.current);
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

  toString() {
    this.current = this.head;
    let result;
    while(this.current){
      result.concat(this.current.value);
    }
  }
}

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  LinkedList,
  Node
};
