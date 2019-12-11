const { DoublyLinkedList } = require('../linkedList/doubly-linked-list');

describe('linked list merge tests', () => {
  it('should return a reference to the first lists head', () => {
    const list1 = new DoublyLinkedList();
    const list2 = new DoublyLinkedList();
    list1.insert(1);
    list2.insert(2);
    expect(list1.merge(list2).head.value).toEqual(1);
  });
  it('should be able to merge two lists of length one', () => {
    const list1 = new DoublyLinkedList();
    const list2 = new DoublyLinkedList();
    list1.insert(1);
    list2.insert(2);
    const mergedList = list1.merge(list2);
    expect(mergedList.head.value).toEqual(1);
    expect(mergedList.head.next.value).toEqual(2);
  });
  it('should be able to merge two lists of length greater than one', () => {
    const list1 = new DoublyLinkedList();
    const list2 = new DoublyLinkedList();
    list1.insert(1);
    list2.insert(2);
    list1.append(3);
    list2.append(4);
    const mergedList = list1.merge(list2);
    expect(mergedList.head.value).toEqual(1);
    expect(mergedList.head.next.value).toEqual(2);
    expect(mergedList.head.next.next.value).toEqual(3);
    expect(mergedList.head.next.next.next.value).toEqual(4);
  });
  it('should be able to merge two lists of dissimilar length', () => {
    const list1 = new DoublyLinkedList();
    const list2 = new DoublyLinkedList();
    list1.insert(1);
    list2.insert(2);
    list1.append(3);
    let mergedList = list1.merge(list2);
    expect(mergedList.head.value).toEqual(1);
    expect(mergedList.head.next.value).toEqual(2);
    expect(mergedList.head.next.next.value).toEqual(3);
    list2.append(4);
    list2.append(6);
    mergedList = list1.merge(list2);
    expect(mergedList.head.next.next.next.value).toEqual(4);
    expect(mergedList.head.next.next.next.next.value).toEqual(6);
  });
});

