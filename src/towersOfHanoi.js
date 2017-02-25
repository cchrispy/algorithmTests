/*
** You have 3 towers and N disks of different sizes which can slide onto any tower.
** The puzzle starts with disks sorted in ascending order of size from top to bottom 
** (i.e., each disk sits on top of an even larger one). You have the following constraints:
**
** 1. Only one disk can be moved at a time.
** 2. A disk is slid off the top of one tower onto another tower.
** 3. A disk cannot be placed on top of a smaller disk. (All towers are in order)
**
** Write a program to move the disks from the first tower to the last using stacks.
*/

// Only push and pop methods
// Cannot push something onto a stack if it's bigger than the last element on the stack


var towersOfHanoi = size => {
  // Have 3 stacks representing the towers
  // The first stack has numbers from 1-n sorted descendingly (bottom to top)

  var arr = range(size);
  return function recurse(start = arr, mid = [], end = []) {

    if (!mid.length && !end.length) { // very first disk moved to mid
      mid.push(start.pop());
    }

    if (!start.length && (!mid.length || !end.length)) { // completed the full transfer
      return { start, mid, end }
    }

    if (start.length) {

      if (!mid.length || !end.length) {
        var open = !mid.length ? mid : end;
        open.push(start.pop());
      } else {
        
      }

    }

    return;

  }

}


/******** HELPER FUNCTIONS ********/

// Generate original stack of size n
var range = n => {
  var arr = [];
  for (var i = n; i >= 1; i--) {
    arr.push(n);
  }
  return arr;
}

// Peeks at the last element of an array
var peek = arr => arr[arr.length - 1]

export default towersOfHanoi;