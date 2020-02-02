const { BinaryTree } = require('./breadthTree.js');

describe('breadth first Binary Tree traversal test', () => {
  it('can instantiate a tree from an array of values', () => {
    const tree = new BinaryTree([10, 7, 8, 9, 4, 2, 5, 15, 13, 20]);
    expect(tree).toBeDefined();
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(7);
    expect(tree.root.left.left.value).toEqual(4);
    expect(tree.root.left.left.left.value).toEqual(2);
    expect(tree.root.left.left.right.value).toEqual(5);
    expect(tree.root.left.right.value).toEqual(8);
    expect(tree.root.left.right.right.value).toEqual(9);
    expect(tree.root.right.value).toEqual(15);
    expect(tree.root.right.left.value).toEqual(13);
    expect(tree.root.right.right.value).toEqual(20);
  });

  it('can return the result of a breadth first traversal of a one tiered tree', () => {
    const tree = new BinaryTree(1);
    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([1]);
  });

  it('can return the result of a breadth first traversal of a two tiered tree', () => {
    const tree = new BinaryTree([5, 3, 7]);
    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([5, 3, 7]);
  });

  it('can return the result of a breadth first traversal of a three tiered tree', () => {
    const tree = new BinaryTree([5, 3, 2, 7, 9, 6]);
    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([5, 3, 7, 2, 6, 9]);
  });

  it('can return the result of a breadth first traversal of a four tiered tree', () => {
    const tree = new BinaryTree([10, 7, 8, 9, 4, 2, 5, 15, 13, 20]);
    const result = tree.breadthFirst(tree.root);
    expect(result).toEqual([10, 7, 15, 4, 8, 13, 20, 2, 5, 9]);
  });
});
