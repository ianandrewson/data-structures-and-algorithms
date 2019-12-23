# Challenge Summary

Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

    enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
    dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency

Start with stack class. Unit tests for push, pop, peek. 

Stacks:
Push: O(1) time and space
Pop: O(1) time and space
Peek: O(1) time and space

PseudoQueues:
enqueue: O(n) time and space
dequeue: O(1) time and space

## Solution

The only tricky method is enqueue. Since a queue is First In First out, but must be implemented via a stack which is First In, Last Out, all values of the queue must be popped onto a shadow stack (thereby reversing the order), pushing the new value onto the now empty queue, and pushing all of the values of the shadow stack back onto the queue (putting back into the proper order, with the new value effectively at the end of the queue).