/*
** Given an array consisting of 0s and 1s, return the length of the longest 
** subarray that contain an equal number of 0s and 1s.
** EXAMPLE
** Input: [1, 1, 1, 0, 1, 0, 0, 1]
** Output: 6
**
** Input: [0, 1, 1, 1, 1, 0, 0, 1]
** Output: 4
**
** Input: [0, 1, 1, 1, 0]
** Output: 2
*/

var maxBalancedBinarySubarray = arr => {

  // Count the number of 0s and 1s by using the sum
  var ones = sum(arr);
  var zeros = arr.length - ones;

  if (ones === zeros) { return arr.length; }

  if (ones === 0 || zeros === 0) { return 0; }

  if (ones === 1 || zeros === 1) { return 2; }

  var size = arr.length;
  if (arr.length % 2) { size--; }

  for (var i = size; i >= 2; i -= 2) {
    for (var j = 0; j < arr.length - i; j++) {
      var sliced = arr.slice(j, j + i);
      if (check(sliced)) { return sliced.length; }
    }
  }
  
}

var sum = arr => arr.reduce((tot, cur) => tot + cur);

var check = arr => sum(arr) === arr.length / 2;

export default maxBalancedBinarySubarray;