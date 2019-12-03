# Reverse an Array
Without utilizing any array methods, write a function that returns an array in reverse order.

## Challenge
Slightly tricky to do without being able to use .push(), .map(), .sort(), or .reverse().

## Approach & Efficiency
I first intialized an empty array with the same length of the original array. A for loop gives me access to an iterale which I can use as an index. Since the reversed array is initialized with a fixed length, I can directly manipulate indeces. (array.length - i - 1) gives the opposite index of Array[i].

## Solution
<!-- Embedded whiteboard image -->

