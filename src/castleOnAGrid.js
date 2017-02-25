/*
** You are given a N x N grid or matrix, with a start (castle) and end coordinate. Write a function that
** will calculate the minimum number of steps to move the castle from the start to the end.
** The castle can move to any coordinate in one move if there is a clear straight path. Some cells 
** on the grid are forbidden and the castle cannot cross/touch them.
** Forbidden cells are denoted as 0. Allowed cells are denoted as 1.
**
** EXAMPLE
** var grid = [
**  [1, 0, 1],
**  [1, 0, 1],
**  [1, 1, 1],
** ];
** Start coordinate (0,0). End coordinate (2, 0).
** Output: 3. (The path goes from (0,0) -> (2, 0) -> (2, 2) -> (2, 0))
*/

var castleOnAGrid = (grid, start, end) => {

  return verifyPath(grid, 0, start, end);

}


/* Helper function
**
** Check if a particular path is allowed or not between two coordinates
** Horizontal is either 1 or 0 depending on if the attempted path is horizontal or vertical
*/
var verifyPath = (grid, horizontal, start, end) => {

  if (horizontal) {
    var row = start[0];
    var a = start[1], b = end[1];
    var range = b - a;
    var step = range / Math.abs(range);
    while (a !== b) {
      if (!grid[row][a]) {
        return false;
      }
      a += step;
    }
  } else {
    var col = start[1];
    var a = start[0], b = end[0];
    var range = b - a;
    var step = range / Math.abs(range);
    while (a !== b) {
      if (!grid[a][col]) {
        return false;
      }
      a += step;
    }
  }
  return true;

}

export default castleOnAGrid;