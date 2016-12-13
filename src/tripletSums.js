// Given an array of integers and a number N, find all the
// triplets that will add up to a sum greater than or equal to N.
// The triplets should be arranged in increasing order.

var tripletSums = (arr, n) => {
  // return null for invalid arguments
  if (!Array.isArray(arr) || arr.length < 3 || typeof n !== 'number') {
    return null;
  }

  var results = [];

  // naive solution, (n^3 log n) complexity with tripley nested loops
  for(var x = 0; x < arr.length - 2; x++) {
    for (var y = x + 1; y < arr.length - 1; y++) {
      for (var z = y + 1; z < arr.length; z++) {
        if (arr[x] + arr[y] + arr[z] >= n) {
          results.push([arr[x], arr[y], arr[z]].sort((a, b) => a - b));
        }
      }
    }
  }

  return results;
}

export default tripletSums;