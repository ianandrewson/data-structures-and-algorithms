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

  add(num) {
    return num;
  }
}

const FizzBuzzTree = tree => {

};

module.exports = { FizzBuzzTree, Node, Tree };
