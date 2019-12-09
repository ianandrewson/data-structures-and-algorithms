# Singly Linked List Implementation

Create a Node class that has a Next pointer and a field for values.

Create a LinkedList class that includes a head.

Linked list should have methods for inserting a new node at the beginning of the list (insert), finding a node with a particular value and returning a boolean (includes), and a method that returns a string representing all values in the linked list.

Handle errors.

Write tests for the following: 

    Can successfully instantiate an empty linked list
    Can properly insert into the linked list
    The head property will properly point to the first node in the linked list
    Can properly insert multiple nodes into the linked list
    Will return true when finding a value within the linked list that exists
    Will return false when searching for a value in the linked list that does not exist
    Can properly return a collection of all the values that exist in the linked list


## Challenge
Pretty straight forward implementation of a singly linked list. Only challenge is that this is my first time implementing such a list, and that it must pass tests.

## Approach & Efficiency
Insert: O(1).
Includes: O(n).
toString: O(n).

## API

const list = new LinkedList(); // instantiates an empty linked list

list.insert('apple') //inserts a new Node with value: apple into 
list. Node is inserted at the beginning of the list.

list.insert('orange') inserts a new Node with value: orange into the list. Since the node is inserted at the beginning of the list, the node with value: orange will have a property "next" that points to the next Node in the list. In this case, next will be a Node with value apple.

list.includes('apple'); //returns true

list.includes('pear') //returns false

list.toString(); // returns "orange apple"