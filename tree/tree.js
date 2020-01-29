class Node {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root){
    if(typeof root === 'number'){
      //console.log('root is a number');
      this.root = new Node(root);
      
    } else {
      if(!root){
        //console.log('there is no root, empty tree');
        this.root = new Node(null);
        this.right = null;
        this.left = null;
      } else {
        //console.log('passed in root is a node');
        this.root = root;
        this.left = this.root.left;
        this.right = this.root.right;
      }
    }
  }

  add(num) {
    if(num === this.root.value){
      throw Error('value already in tree');
    }
    if(num < this.root.value){
      if(this.left !== null) {
        new BinaryTree(this.left).add(num);
      } else this.left = new Node(num);
    } else {
      if(this.right !== null){
        new BinaryTree(this.right).add(num);
      } else this.right = new Node(num);
    }
  }
}

//   add(num) {
//     let current = this.root;
//     if(num === current.value){
//       throw new Error('value is already in tree');
//     }
//     if(current.left === null && current.right === null){
//       if(num < current.value){
//         current.left = new Node(num);
//         return;
//       } else {
//         current.right = new Node(num);
//         return;
//       }
//     } else {
//       if()
//     }
//   }
// }

module.exports = { BinaryTree, Node };
