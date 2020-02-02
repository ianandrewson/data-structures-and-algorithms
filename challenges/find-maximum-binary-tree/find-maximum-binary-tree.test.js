const { BinaryTree } = require('./Tree.js');

describe('find maximum value in binary tree test', () => {
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

  it('can find the max value in a tree of depth 1', () => {
    const tree = new BinaryTree([5, 3, 6]);
    const result = tree.findMaximumValue(tree.root);
    expect(result).toEqual(6);
  });

  it('can find the maximum value in a tree of depth 2', () => {
    const tree = new BinaryTree([5, 3, 7, 2, 13, 11]);
    const result = tree.findMaximumValue(tree.root);
    expect(result).toEqual(13);
  });

  it('can find the maximum value in a tree of depth 3', () => {
    const tree = new BinaryTree([10, 7, 8, 9, 4, 2, 5, 15, 13, 20]);
    const result = tree.findMaximumValue(tree.root);
    expect(result).toEqual(20);
  });
});
