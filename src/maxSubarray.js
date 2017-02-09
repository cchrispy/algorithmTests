// Given an array, return the sum of the subarray that has the greatest sum

/*
** Example
** [-3, 5, -2, 3, 4, -2, 3] should be 11
** [-3, 5, -2, 3, -4, 4, -2, 3] should be 7
** [1, 1, 5, 2, -2, -2] should be 9
** [-2, 1, 1, 5, 2, -2, -2] should be 9
** [1, 1, 1, -1, 1, -2, 1, 2, 1] should be 5
*/

var maxSubarray = arr => {
  var sum = 0;
  var max = 0;
  arr.forEach(n => {
    sum = sum + n > 0 ? sum + n : 0;
    max = sum > max ? sum : max;
  })
  return max;
}

export default maxSubarray;