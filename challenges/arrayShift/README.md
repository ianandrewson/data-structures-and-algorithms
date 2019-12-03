# Reverse an Array
Without utilizing any array methods, write a function that returns an array with a new value exactly in the middle.

## Challenge
Slightly tricky to do without being able to use .push().

## Approach & Efficiency
O(n), will always take as long as the length of the array.

Find the length of the supplied array, create a new array of same length + 1. Find midpoint. Copy contents of supplied array into result array until the midpoint is reached, in which case copy in the new value. Continue copying elements into result array thereafter, and return the result.

## Solution
![Whiteboard Solution]('../../assets/CC2_WB.jpg')

