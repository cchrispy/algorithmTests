// Given an array, return the sum of the subarray that has the greatest sum

/*
** Example
** [-3, 5, -2, 3, 4, -2, 3] should be 11
** [-3, 5, -2, 3, -4, 4, -2, 3] should be 7
** [1, 1, 5, 2, -2, -2] should be 9
** [-2, 1, 1, 5, 2, -2, -2] should be 9
** [1, 1, 1, -1, 1, -2, 1, 2, 1] should be 5
*/

var maxSubarray = arr => { // SUB-OPTIMAL SOLUTION

  var sums = [];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) { // combine positives and negatives togethers
    if ((sum < 0 && arr[i] >= 0) || (sum > 0 && arr[i] <= 0)) {
      sums.push(sum);
      sum = arr[i];
    } else {
      sum += arr[i];
    }
  }
  sums.push(sum);

  while (sums[0] < 0) { sums.shift() }; // remove negatives from the front
  while (sums[sums.length - 1] < 0) { sums.pop() }; // and negatives from the back
  var max = sums.reduce((tot, next) => next > tot ? next : tot, sums[0]); // the maximum

  var i = 0;
  while (i < sums.length) {
    // combine adjacent pairs of pos/neg numbers if they are positive overall
    if (sums[i] + sums[i + 1] > 0) {
      var num = sums.shift();
      sums[0] += num;
    } else {
      i++;
    }
  }
  var compare = sums.reduce((tot, next) => next > tot ? next : tot, sums[0]);
  max = max > compare ? max : compare;

  return max;
}


var pr = (x) => console.log(maxSubarray(x));

pr([-3, 5, -2, 3, 4, -2, 3]); // 11
pr([-3, 5, -2, 3, -4, 4, -2, 3]) // 7
pr([1, 1, 5, 2, -2, -2]) // 9
pr([-2, 1, 1, 5, 2, -2, -2]) // 9
pr([1, 1, 1, -1, 1, -2, 1, 2, 1]) // 5
pr([5, -4, 3]); // 5
pr([3, -4, 5]); // 5
pr([5, -1, -1, 3]); // 6
pr([3, -2, 4, -3, 1, -5, 6, 1, -1, 2]); // 8
pr([3, -2, 4, -3, 1, -5, 2, 1, -1, 2]); // 5