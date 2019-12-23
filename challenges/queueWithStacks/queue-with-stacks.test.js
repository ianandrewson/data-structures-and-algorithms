const { Stack } = require('../queueWithStacks/queue-with-stacks.js');
const { Queue } = require('../queueWithStacks/queue-with-stacks.js');


describe('queue and stack tests', () => {
  it('can create an empty stack', () => {
    const stack = new Stack();
    expect(stack.head).toBeNull();
  });
  it('can push a value to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.head.value).toEqual(1);
    expect(stack.head.next).toBeNull();
    stack.push(2);
    expect(stack.head.value).toEqual(2);
    expect(stack.head.next).toBeDefined();
  });
  it('can pop a value from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.head.value).toEqual(1);
    expect(stack.head.next).toeBeUndefined();
  });
  it('can peek at the first value in the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.peek()).toEqual(2);
  });
  it('can make an empty queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
    expect(queue.head).toBeDefined();
  });
  it('can add a value to the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.head.value).toEqual(1);
    queue.enqueue(2);
    expect(queue.head.value).toEqual(1);
  });
  it('can dequeue the correct value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.head.value).toEqual(2);
    expect(queue.head.next.value).toEqual(3);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.head.value).toEqual(3);
  });
});
