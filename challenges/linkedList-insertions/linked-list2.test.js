const { LinkedList } = require('../linkedList/linked-list');

describe('linked-list-insertions tests', () => {
  it('can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.insert(5);
    list.append(6);
    expect(list.current.next).toEqual({value: 6, next: null});
  });
  it('can successfully add multiple nodes to the end of a linked list', () =>{
    const list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });
  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.append(3);
    list.append(4);
    list.insertBefore(3, 2);
    list.insertBefore(4, 'TEST');
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual('TEST');
    expect(() => list.insertBefore(99, 'Not Found')).toThrowError(new Error('Value to insert before was not found.'));
  });
  it('can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.insert(2);
    list.insert(1);
    list.insert(0);
    expect(list.head.value).toEqual(0);
    expect(list.head.next.value).toEqual(1);
  });
  it('can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.append(3);
    list.insertAfter(1, 2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(() => list.insertAfter(99, 'NOPE')).toThrowError(new Error('Value to insert after was not found.'));
  });
  it('can successfully insert after the last node of the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insertAfter(1, 2);
    list.insertAfter(2, 3);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });
  it('can successfully delete a node base on a value', () => {
    const list = new LinkedList();
    list.insert(1);
    list.append(2);
    list.append(3);
    list.delete(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
  });
});
