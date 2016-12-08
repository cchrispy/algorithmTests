// You are given an array of length N 
// that contains random integers from 1 to N-1 (inclusive). 
// Write a function that will return a number that appears 
// more than once in the array. There will always be at least 
// one duplicate number in the array. 
// Constraints: O(n log n) time complexity and O(1) space complexity, 
// without mutating the original array.

/*
**        EXAMPLE
**        var list = [4, 1, 5, 2, 1, 2];
**        
**        findADupe(list); // return either 1 or 2
*/

var findADupe = array => {
  // return null for invalid arguments
  if (!Array.isArray(array) || !array.length) { return null };

  /* O(n) space complexity and O(n) time complexity solution */
  /************************************************************
  **  var store = {};
  **
  **  for (var i = 0; i < array.length; i++) {
  **    if (store[array[i]]) { return array[i]; }
  **    store[array[i]] = true;
  **  }
  ************************************************************/

  /* O(1) space and O(n) time solution with mutation         */
  /************************************************************
  **  array.sort((a, b) => a - b);
  **  for (var i = 1; i < array.length; i++) {
  **    if (array[i] === array[i - 1]) {
  **      return array[i];
  **    }
  **  }
  ************************************************************/

  /* O(1) space and O(n^2) time solution without mutation    */
  /************************************************************
  **  for (var i = 0; i < array.length; i++) {
  **    if (i !== array.lastIndexOf(array[i])) {
  **      return array[i];
  **    }
  **  }
  ************************************************************/

  

};

export default findADupe;