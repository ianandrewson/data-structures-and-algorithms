const { LinkedList, Node } = require('./linked-list');

describe('Linked-List tests', () => {
  it('Can successfully instantiate an empty linked list', () => {
    expect(list.head).toBeNull();
    expect(list.constructor).toHaveBeenCalled();
    expect(list.current).toBeNull();
  });
  it('Can properly insert into the linked list', () => {
    expect(node.constructor).toHaveBeenCalled();
    expect(list.head).toBeDefined();
  });
  it('The head property will properly point to the first node in the list', () => {
    expect(list.head).toBeDefined();
    expect(list.insert).toHaveBeenCalledTimes(3);
    expect(list.head.node.value).toEqual();

  });  
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(list.insert).toHaveBeenCalledTimes(3);
    expect(list.nodes.keys().length).toEqual(3);
    while(current) {
      expect(current.next).toBeDefined();
    }
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(list.includes()).toBeTruthy();
    expect(list.includes()).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(list.includes()).toBeFalsy();
    expect(list.includes()).toBeFalsy();
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(list.toString()).toEqual('1, 2, 3');
  });
});
