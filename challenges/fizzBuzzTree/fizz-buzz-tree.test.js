const { FBT, Node, Tree } = require('./fizz-buzz-tree.js');

describe('fizzbuzz tree tests', () => {
  it('can instantiate a new node', () => {
    const node = new Node(3);
    expect(node).toBeDefined();
    expect(node.value).toEqual(3);
  });

  it('can instantiate a new tree with a single value', () => {
    const tree = new Tree(3);
    expect(tree).toBeDefined();
    expect(tree.root.value).toEqual(3);
    expect(tree.root.left).toBeNull();
  });

  it('can add two child nodes', () => {
    const tree = new Tree(3);
    tree.add(1);
    tree.add(5);
    expect(tree.root.value).toEqual(3);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(5);
  });

  it('can add three nodes to the right places', () => {
    const tree = new Tree(3);
    tree.add(2);
    tree.add(1);
    tree.add(5);
    expect(tree.root.left.left.value).toEqual(1);
  });

  it('can make a tree out a list of node values', () => {
    const tree = new Tree([5, 3, 7, 2, 4, 9]);
    expect(tree).toBeDefined();
  });

  it('can convert a single root node of value 3 to the word "Fizz"', () => {
    const tree = new Tree(3);
    const newTree = FBT(tree);
    expect(newTree.root.value).toEqual('Fizz');
  });

  it('can convert a single root node of value 5 to the word "Buzz"', () => {
    const tree = new Tree(5);
    const newTree = FBT(tree);
    expect(newTree.root.value).toEqual('Buzz');
  });

  it('can convert a single root node of value 15 to the word "FizzBuzz"', () => {
    const tree = new Tree(15);
    const newTree = FBT(tree);
    expect(newTree.root.value).toEqual('FizzBuzz');
  });

  it('can convert a single root node of value 2 to a string', () => {
    const tree = new Tree(2);
    const newTree = FBT(tree);
    expect(typeof newTree.root.value).toEqual('String');
    expect(newTree.root.value).toEqual('2');
  });

  it('can convert a three node tree to the right values', () => {
    const tree = new Tree([5, 2, 9]);
    const newTree = FBT(tree);
    expect(newTree.root.value).toEqual('Buzz');
    expect(newTree.root.left.value).toEqual('2');
    expect(newTree.root.right.value).toEqual('Fizz');
  });

  it('can convert a 6 node tree to the right values', () => {
    const tree = new Tree([5, 3, 7, 15, 6, 1]);
    const newTree = FBT(tree);
    expect(newTree.root.value).toEqual('Buzz');
    expect(newTree.root.left.value).toEqual('Fizz');
    expect(newTree.root.left.left.value).toEqual('1');
    expect(newTree.root.right.value).toEqual('7');
    expect(newTree.root.right.right.value).toEqual('FizzBuzz');
    expect(newTree.root.right.left.value).toEqual('7');
    expect(newTree.root.right.left.right).toBeNull();
  });
});
