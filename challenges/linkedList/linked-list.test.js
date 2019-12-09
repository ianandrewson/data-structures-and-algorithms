const { LinkedList, Node } = require('./linked-list');

describe('Linked-List tests', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
    expect(list.constructor).toHaveBeenCalled();
    expect(list.current).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    const node = list.insert();
    expect(node.constructor).toHaveBeenCalled();
    expect(list.head).toBeDefined();
  });
  it('The head property will properly point to the first node in the list', () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.head).toBeDefined();
    expect(list.insert).toHaveBeenCalledTimes(3);
    expect(list.head.node.value).toEqual(1);

  });  
  it('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.insert).toHaveBeenCalledTimes(3);
    expect(list.nodes.keys().length).toEqual(3);
    while(current) {
      expect(current.next).toBeDefined();
    }
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
    expect(list.toString()).toEqual('1, 2, 3');
  });
});
