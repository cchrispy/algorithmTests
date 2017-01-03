// Given an N x M matrix formed with 0s and 1s, find the perimeter
// of a subfigure formed with 1s.

/*
** Example
** Input: [
**  [0, 0, 0, 0, 0],
**  [0, 1, 1, 0, 0],
**  [0, 1, 1, 1, 0],
**  [0, 0, 1, 1, 0],
**  [0, 0, 1, 0, 0],
**  [0, 0, 0, 0, 0],
**  [0, 0, 0, 0, 0]
** ]
** Output: 14
*/

const perimeter = matrix => {

  /*******
  ******** WRONG METHOD **
  ******** Find the minimum and maximum width and height coordinates
  ******** and find the perimeter using those widths and heights = 2 * (W + H)
  ******** WRONG METHOD **
  *******/

  //////// var rows = {};
  //////// var cols = {};

  //////// matrix.forEach((_line, row) => {
  ////////   _line.forEach((elm, col) => {
  ////////     if (elm) {
  ////////       rows[row] = true;
  ////////       cols[col] = true;
  ////////     }
  ////////   })
  //////// });
  //////// var width = Object.keys(cols).length;
  //////// var height = Object.keys(rows).length;

  //////// return 2 * (width + height);

  /*
  ** Naive working solution
  ** Iterate to each element. If the element is 1, then count the number
  ** of surrounding 0s. Add it to a counter.
  */

  var peri = 0;
  matrix.forEach((line, row) => {
    line.forEach((elm, col) => {
      if (elm) {
        peri += borders(matrix, [row, col]);
      }
    })
  });

  return peri;

}

var borders = (matrix, coord) => {

  var count = 0;
  var x = coord[0];
  var y = coord[1];

  // top and bottom
  if (!matrix[x - 1]) {
    count++;
  } else {
    if (!matrix[x - 1][y]) {
      count++;
    }
  }
  if (!matrix[x + 1]) {
    count++;
  } else {
    if (!matrix[x + 1][y]) {
      count++;
    }
  }

  // sides
  if (matrix[x][y - 1] !== 1) {
    count++;
  }
  if (matrix[x][y + 1] !== 1) {
    count++;
  }

  return count;
}

export default perimeter;