// Given a 2D matrix filled with 1's and 0's, 
// count the number of islands in the matrix. 
// An island is a group of 1's that are connected 
// adjacently to each other (not including diagonally).

/*      EXAMPLE
*       
 *      var matrix = [
*         [0, 1, 0, 1, 0],
 *        [0, 0, 1, 1, 1],
*         [1, 0, 0, 1, 0],
 *        [0, 1, 1, 0, 0],
*         [1, 0, 1, 0, 1]
 *      ];
*       
 *      islandCount(matrix); // 6
*/

var islandCount = matrix => {
  // Handle edge cases
  if (!matrix || !matrix.length) { return null };

  var result = 0;

  // Iterate through the matrix
    // Skip over 0's
    // Toggle 1's to 0 and increment a counter
      // use recursive function to toggle adjacent 1's into 0's

  // A function to recursively toggle adjacent cells from 1's to 0's
  function clearIsland(row, col, rowMax, colMax) {
    if (!matrix[row][col]) { // stop when edge of an island is reached
      return;
    }
    matrix[row][col] = 0; // toggle 1 to 0

    // check adjacent elements below, right, above, left
    if (row < rowMax) { // below
      clearIsland(row + 1, col, rowMax, colMax);
    }
    if (col < colMax) { // right
      clearIsland(row, col + 1, rowMax, colMax);
    }
    if (row > 0) { // above
      clearIsland(row - 1, col, rowMax, colMax);
    }
    if (col > 0) { // left
      clearIsland(row, col - 1, rowMax, colMax);
    }
  }

  matrix.forEach((arr, row) => {
    arr.forEach((elm, col) => {
      if (elm) {
        clearIsland(row, col, matrix.length - 1, arr.length - 1);
        result++;
      }
    })
  });

  return result;
}

export default islandCount;