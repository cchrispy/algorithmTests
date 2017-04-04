/*
** A monotonic pair in an array A of length N is a pair of integers (P, Q) 
** such that 0 <= P <= Q <= N and A[P] <= A[Q].
** Given an array of integers, find the monotonic pair whose indeces 
** are furthest apart and return that distance. 
** Constraints: linear time complexity and linear space complexity.

** EXAMPLE
** var arr = [5, 3, 6, 3, 4, 2];
** 
** ** There are 11 monotonic pairs: 
** ** (0,0), (0, 2), (1, 1), (1, 2), (1, 3), (1, 4), (2, 2), (3, 3), (3, 4), (4, 4), (5, 5)
** ** The biggest distance is 3, in the pair (1, 4)
** 
** maxDistanceMonotonic(arr); // 3
*/

var maxDistanceMonotonic = arr => {

  /*
  ** Naive solution with O(n^2) time complexity and O(1) space complexity
  */
  var max = 0;

  for (var i = 0; i < arr.length && i + max < arr.length; i++) {
    let n = arr[i];
    var j = arr.length - 1;
    while (max < j - i) {
      if (arr[i] <= arr[j]) {
        max = j - i;
      }
      j--;
    }
  }

  return max;
}

export default maxDistanceMonotonic;