// You are given an array of positive or negative integers (no 0). If a number n is positive,
// then move forward n steps. If n is negative, then move backwards n steps. Assume the first
// element wraps ahead of the last element, and the last element wraps behind the first element.
// Starting at index 0, determine if there is a loop in the array. Something is considered a loop
// if it starts and ends at a certain index, and has MORE THAN 1 element. The loop must go
// either 'forward' or 'backwards'.
// Example: [2, -1, 1, 2, 2] has a loop: index 0 -> 2 -> 3 -> 0
// Example: [-1, 2] has no loop
// O(n) time complexity; O(1) space complexity

var circularArrayLoop = arr => { // returns a boolean value

  /*
  ** This solution does not work for loops that have parts of it
  ** going in different directions.... for example:
  **           [1, -1] should be false but it's true
  ** [-4, 2, 4, -1, 1] should be false but it's true
  */

  var index = 0;
  var prev;

  for (var i = 0; i < arr.length; i++) {

    prev = index;

    var steps = arr[index];
    if (steps === arr.length) { return false; } // handles a loop with 1 element
    arr[index] = 0;
    index += steps;

    if (index >= arr.length) { index -= arr.length; }
    if (index < 0) { index += arr.length; }

    if (prev === index) { return false; } // handles a loop with 1 element

    if (!arr[index]) { return true; }

  }

  return false;
}

export default circularArrayLoop;