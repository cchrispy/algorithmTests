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
  var zeros = arr.length - sum(arr);
  var ones = arr.length - zeros;

  

}

var sum = arr => arr.reduce((tot, cur) => tot + cur);

export default maxBalancedBinarySubarray;