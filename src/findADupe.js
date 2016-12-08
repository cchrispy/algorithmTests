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

  /* O(1) space and O(n log n) time solution with mutation         */
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

  var N = array.length;
  // Split on N and check how many elements are less than or greater than N/2 O(log n)
  // Each split requires 1 loop through to count O(n)
  // Overall O(n log n) time complexity, constant space, no mutation

  var result;

  function splitN(low, high) {
    if (result) { return; } // exit function if a dupe is already found

    var split = Math.floor((low + high) / 2); // halfway point

    if (split === low) { // base case if low and high are consecutive
      var count = 0;
      array.forEach(num => {
        if (num === split) {
          count++;
        }
      })
      result = count > 1 ? low : high;
    } else {
      var count = 0;
      array.forEach(num => {
        if (num >= low && num <= split) {
          count++;
        }
      })
      if (count > split - low + 1) {
        splitN(low, split);
      } else {
        splitN(split + 1, high);
      }
    }
  }

  splitN(1, N);

  return result;

};

export default findADupe;