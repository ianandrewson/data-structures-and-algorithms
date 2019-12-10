# Singly Linked List Implementation
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

Write tests that check:

    Where k is greater than the length of the linked list
    Where k and the length of the list are the same
    Where k is not a positive integer
    Where the linked list is of a size 1
    “Happy Path” where k is not at the end, but somewhere in the middle of the linked list


## Challenge
With a doubly linked list, this is a pretty straight forward challenge. With a singly linked list, this would be much more challenging without implementing a length counter.

## Approach & Efficiency
O(n)