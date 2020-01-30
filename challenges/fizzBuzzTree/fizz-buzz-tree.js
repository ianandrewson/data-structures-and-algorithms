class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(vals){
    if(typeof vals === 'number'){
      this.root = new Node(vals);
    } else {
      this.root = new Node(vals.splice(0, 1)[0]);
      vals.forEach(value => this.add(value));
    }
  }

  add(num){
    let current = this.root;
    while(current !== null){
      if(num === current.value){
        throw new Error('number already in tree');
      }
      if(num < current.value){
        if(!current.left){
          current.left = new Node(num);
          current = null;
        } else {
          current = current.left;
        }
      } else {
        if(!current.right){
          current.right = new Node(num);
          current = null;
        } else {
          current = current.right;
        }
      }
    }
  }

  // add(num) {
  //   if(num === this.root.value){
  //     throw Error('value already in tree');
  //   }
  //   if(num < this.root.value){
  //     if(this.left !== null) {
  //       new BinaryTree(this.left).add(num);
  //     } else {
  //       this.left = new Node(num);
  //       this.root.left = this.left;
  //     }
  //   } else {
  //     if(this.right !== null){
  //       new BinaryTree(this.right).add(num);
  //     } else {
  //       this.right = new Node(num);
  //       this.root.right = this.right;
  //     }
  //   }
  // }
}

const FizzBuzzTree = tree => {

};

module.exports = { FizzBuzzTree, Node, Tree };
