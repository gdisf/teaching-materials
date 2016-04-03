# Sorting Algorithms

## Insertion sort

* Create a new array where the sorted elements will go
* Start with the first element in the un-sorted array
* Go through the sorted array until you find the correct position for the element
* Insert the element in its correct position
* Repeat until the un-sorted array is empty

## Selection sort

* Divide the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. 
* Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. 
* Find the smallest element in the unsorted sublist
* Exchange/swap the smallest element in the unsorted list with the leftmost unsorted element (putting it in sorted order)
* Move the sublist boundaries one element to the right.

## Merge sort

* Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
* Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.


## Bucket sort

* Set up an array of initially empty "buckets" that represent a range (ie. buckets for 1-5, 6-10, etc)
* Scatter: Go over the original array, putting each object in its bucket.
* Sort each non-empty bucket.
* Gather: Visit the buckets in order and put all elements back into the original array.

## Pancake sort

Simply put, we have a spatula and a stack of pancakes. The goal is to order the pancakes from largest on the bottom, to smallest on the top. The only caveat being we can only action we can preform is flip which is preformed by inserting the spatula and flipping the entire stack above the spatula over.

## Spaghetti sort

Once you have all your spaghetti rods, take them loosely in your fist and lower them to the table, so that they all stand upright, resting on the table surface. Now, for each rod, lower your other hand from above until it meets with a rod—this one is clearly the longest. Remove this rod and insert it into the front of the (initially empty) output list (or equivalently, place it in the last unused slot of the output array). Repeat until all rods have been removed.

* Take all the elements
* Find the longest/largest one
* Place that element at the *front* of the sorted output
* Repeat

## Bogosort

* If the cards are not sorted, shuffle them
* Repeat

## Quantum Bogosort

1. Quantumly randomise the list, such that there is no way of knowing what order the list is in until it is observed. This will divide the universe into O(n!) universes; however, the division has no cost, as it happens constantly anyway.
2. If the list is not sorted, destroy the universe. (This operation is left as an exercise to the reader.)
3. All remaining universes contain lists which are sorted.
