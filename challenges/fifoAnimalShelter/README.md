# Challenge Summary

Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
  Implement the following methods:
    enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
    dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency

Straightforward queue.

enqueue: O(n)
dequeue: O(1)

## Solution

Since this challenge placed no restrictions on methods or implementation, I chose to use an array, since it maintains order as items are pushed to it. Then, it becomes a matter of finding the right animal to return, regardless of whether it was pushed to the array before other animals. 