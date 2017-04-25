// Given a set of intervals, return all non-overlapping intervals after merging overlapping intervals.
// EXAMPLE
/*
** let intervals = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
** -> [1, 6], [7, 10], [12, 15]
*/

var mergeOverlappingIntervals = intervals => {

  // assuming the intervals are sorted, this operates at O(n) time complexity

  return intervals.reduce((res, interval) => {
    if (!res.length) {
      return interval;
    }

    var last = getLast(res);
    if (interval[0] <= last[1]) {
      return replaceLast(res, [last[0], interval[1]]);
    } else {
      return res.concat([interval]);
    }
  }, [])
}

// get the last element in an array
var getLast = arr => arr[arr.length - 1];

// replace the last element in an array with something else
var replaceLast = (arr, item) => {
  arr[arr.length - 1] = item;
}

let intervals = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
console.log(mergeOverlappingIntervals(intervals));

// export default mergeOverlappingIntervals;