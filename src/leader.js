/*
** Given an array of integers, return the index of any element that appears
** in more than half of the elements in the array. If no element appears more than 
** half the time, then return -1.
** Constraints: Linear time complexity and constant space
**
** EXAMPLE
** var arr = [3, 4, 3, 2, 3, -1, 3, 3];
** leader(arr); // returns 0, 2, 4, 6, or 7 because 3 appears 5 times
*/

var leader = arr => {
  /*********************************************
  ** Naive solution: linear time & linear space
  ** Store values in object and count
  *********************************************/
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
    if (obj[arr[i]] > arr.length / 2) {
      return i;
    }
  }
  return -1;
  /********************************************/

  
}

export default leader;