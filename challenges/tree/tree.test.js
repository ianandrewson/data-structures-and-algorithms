const { BinaryTree, Node } = require('./tree.js');

describe('tree tests', () => {
  it('can instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeDefined();
  });

  it('can instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(1);
    expect(tree).toBeDefined();
    expect(tree.root.value).toEqual(1);
  });

  it('can add a left and right child to a single root node', () => {
    const tree = new BinaryTree(2);
    tree.add(1);
    tree.add(3);
    // console.log(tree.root.left.value);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(3);
  });

  it('can return a collection from a preorder traversal', () => {
    const tree = new BinaryTree(7);
    tree.add(2);
    tree.add(1);
    tree.add(100);
    tree.add(55);
    tree.add(103);
    expect(tree.preOrder(tree.root)).toEqual([7, 2, 1, 100, 55, 103]);
  });

  it('can return a collection from an inorder traversal', () => {
    const tree = new BinaryTree(5);
    tree.add(3);
    tree.add(15);
    tree.add(2);
    tree.add(8);
    tree.add(22);
    expect(tree.inOrder(tree.root)).toEqual([2, 3, 5, 8, 15, 22]);
  });

  it('can return a collection from a postorder traversal', () => {
    const tree = new BinaryTree(10);
    tree.add(7);
    tree.add(8);
    tree.add(9);
    tree.add(4);
    tree.add(2);
    tree.add(5);
    tree.add(15);
    tree.add(13);
    tree.add(20);
    expect(tree.postOrder(tree.root)).toEqual([2, 5, 4, 9, 8, 7, 13, 20, 15, 10]);
  });

  it('can contrust a tree from an array', () => {
    const tree = new BinaryTree([10, 7, 8, 9, 4, 2, 5, 15, 13, 20]);
    console.log(tree.left);
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

  it('can return the correct boolean if a tree contains a value', () => {
    const tree = new BinaryTree([10, 7, 8, 9, 4, 2, 5, 15, 13, 20]);
    expect(tree.contains(10)).toBeTruthy();
    expect(tree.contains(2)).toBeTruthy();
    expect(tree.contains(20)).toBeTruthy();
    expect(tree.contains(999)).toBeFalsy();
  });
});
