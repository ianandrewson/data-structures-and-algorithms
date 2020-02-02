# Challenge Summary

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced.

[], {}, () are valid brackets.

## Approach & Efficiency

Since the only parts of the string that matter are brackets, the string will be split by all characters, and then filtered down to just brackets. From there, each open bracket will check for a closing bracket. I'll try to implement this without regex.

O(n) for time and space

## Solution

Since balanced brackets means that for each left bracket, there will be as many right brackets, the brackets can be counted and that count compared to make sure that they are balanced.