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

  append(val){
    this.current = this.head;
    while(this.current !== null){
      if(this.current.next === null) {
        this.current.next = new Node(val, null);
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
        this.current.next = new Node(newValue, this.current.next);
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
        this.current.next = new Node(newValue, this.current.next);
        break;
      } else this.current = this.current.next;
    }
  }

  delete(val){
    this.current = this.head;
    while(this.current !== null){
      if(this.current.next.value === val){
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
