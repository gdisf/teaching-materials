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

## Bubble Sort

* Compare the 0th and 1st elements. If they are in the wrong order, swap them. 
* Compare the 1st and 2nd elements. If they are in the wrong oder, swap them.
* Continue comparing until you reach the end of the array. 
* Go back to the beginning and compare the 0th and 1st elements. 
* Loop through the array as many times as needed until everything is sorted.

## Bogosort

* If the values are not sorted, shuffle them
* Repeat

## Quantum Bogosort

* Quantumly randomise the list, such that there is no way of knowing what order the list is in until it is observed. This will divide the universe into O(n!) universes; however, the division has no cost, as it happens constantly anyway.
* If the list is not sorted, destroy the universe. (This operation is left as an exercise to the reader.)
* All remaining universes contain lists which are sorted.
