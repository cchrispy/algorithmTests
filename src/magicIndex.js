/*
** A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.
** Given a SORTED array of DISTINCT integers, write a method to find a magic index,
** if one exists, in array A. If it does not exist, return false.
** EXTRA: What if the values are not distinct?
**
** EXAMPLE
** magicIndex([3, 4, 5, 6]) returns false
** magicIndex([-2, 0, 1, 2, 4, 5]) returns 4 or 5
** magicIndex([3, 4, 4, 4, 4, 6]) returns 4
*/

var magicIndex = (arr, start = 0, end) => {
  
  /* Solution with O(n) time complexity and NO recursion */
  /* Will work for distinct and non-distinct cases       */
  /********************************************************
  ** for (var i = 0; i < arr.length; i++) {
  **   if (arr[i] === i) {
  **     return i;
  **   }
  ** }
  ** return false;
  ********************************************************/


  var _end = end !== undefined ? end : arr.length - 1;
  var mid = Math.floor((start + _end) / 2);

  if (arr[mid] === mid) { return mid; }
  if (start === mid) { return false; }

  if (arr[mid] < mid) {
    // if the middle element is less than its index, search above
    return magicIndex(arr, mid + 1, _end);
  } else {
    return magicIndex(arr, start, mid - 1);
  }

}

export default magicIndex;