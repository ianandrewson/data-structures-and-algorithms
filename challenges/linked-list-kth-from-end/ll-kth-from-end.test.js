const { DoublyLinkedList } = require('../linkedList/doubly-linked-list');

describe('ll kth-from-end tests', () => {
  it('should throw an error if k is greater than the length of the list', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(() => list.kthFromEnd(6)).toThrowError();
  });
  it('should return the value of the first node if k is the same as the length of the list', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    expect(list.kthFromEnd(1)).toEqual(1);
    list.append(2);
    expect(list.kthFromEnd(2)).toEqual(1);
    list.append(3);
    expect(list.kthFromEnd(3)).toEqual(1);
  });
  it('should throw an error if k is negative', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    list.insert(2);
    expect(() => list.kthFromEnd(-1)).toThrowError();
  });
  it('should return the value of the only node in a list of length one', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    expect(list.kthFromEnd(1)).toEqual(1);
  });
  it('should return the correct value if k is in the middle of the list', () => {
    const list = new DoublyLinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.kthFromEnd(2)).toEqual(3);
    expect(list.kthFromEnd(1)).toEqual(4);
  });
});
