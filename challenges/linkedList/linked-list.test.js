const { LinkedList } = require('./linked-list');

describe('Linked-List tests', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.current).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.head).toBeDefined();
    expect(list.current).toEqual(list.head);
  });
  it('The head property will properly point to the first node in the list', () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.head).toBeDefined();
    expect(list.head.value).toEqual(1);

  });  
  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.current.next).toBeDefined();
    expect(list.current.value).toEqual(1);
    expect(list.current.next.value).toEqual(2);
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insert('truck');
    list.insert('apple');
    expect(list.includes('truck')).toBeTruthy();
    expect(list.includes('apple')).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insert('car');
    list.insert(8);
    expect(list.includes('car')).toBeTruthy();
    expect(list.includes(88)).toBeFalsy();
    expect(list.includes('card')).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    expect(list.toString()).toEqual('3 2 1');
  });
});
