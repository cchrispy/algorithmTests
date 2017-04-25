// Given a set of intervals, return all non-overlapping intervals after merging overlapping intervals.
// EXAMPLE
/*
** let intervals = [[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]];
** -> [1, 6], [7, 10], [12, 15]
*/

var mergeOverlappingIntervals = intervals => {

  // assuming the intervals are sorted

  return intervals.reduce((res, interval) => {
    if (!res.length) {
      return interval;
    }

    
    
  }, [])
}

// get the last element in an array
var getLast = arr => arr[arr.length - 1];

export default mergeOverlappingIntervals;