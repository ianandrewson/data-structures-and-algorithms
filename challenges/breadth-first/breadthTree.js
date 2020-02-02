class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(vals){
    this.result = [];
    if(typeof vals === 'number'){
      this.root = new Node(vals);
    } else if(!vals) {
      this.root = new Node();
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

  preOrder(node) {
    if(node === this.root) this.result = [];
    this.result.push(node.value);
    if(node.left) this.preOrder(node.left);
    if(node.right) this.preOrder(node.right);
    return this.result;
  }

  inOrder(node) {
    if(node === this.root) this.result = [];
    if(node.left) this.inOrder(node.left);
    this.result.push(node.value);
    if(node.right) this.inOrder(node.right);
    return this.result;
  }

  postOrder(node) {
    if(node === this.root) this.result = [];
    if(node.left) this.postOrder(node.left);
    if(node.right) this.postOrder(node.right);
    this.result.push(node.value);
    return this.result;
  }

  contains(value) {
    const contents = this.inOrder(this.root);
    return contents.includes(value);
  }
}

module.exports = { BinaryTree, Node };
