/*
** Array spiral
** Given a positive integer N, return a N x N matrix with a spiral pattern. 
** The pattern will spiral inwards starting from a corner, and no leg of the spiral
** can be immediately adjacent to another leg of the spiral (parts of the spiral can't touch side-to-side).
**
** size: 5  [[1, 1, 1, 1, 1],
**           [1, 0, 0, 0, 0],
**           [1, 0, 1, 1, 1],
**           [1, 0, 0, 0, 1],
**           [1, 1, 1, 1, 1]]
** 
** size: 6  [[1, 1, 1, 1, 1, 1],
**           [1, 0, 0, 0, 0, 0],
**           [1, 0, 1, 1, 1, 1],
**           [1, 0, 1, 0, 0, 1],
**           [1, 0, 0, 0, 0, 1],
**           [1, 1, 1, 1, 1, 1]]
*/

var arraySpiral = size => {
  if (size <= 3) { return null; };                                    // return null for sizes less than or equal to 3

  var matrix = createMatrix(size);                                    // generate a matrix

  /*
  ** initialize the matrix with outer spiral legs (top, right, & bottom borders)
  ** this solves the problem of hitting the borders
  */
  matrix[0] = matrix[0].map(_ => 1);                                  // top border
  matrix[matrix.length - 1] = matrix[matrix.length - 1].map(_ => 1);  // bottom border
  for (var i = 0; i < size; i++) { matrix[i][size - 1] = 1 };         // right border

  var coord = [matrix.length - 2, 0];                                 // initialize start coordinate as the lower left

  /* 
  ** keep track of the current direction of the spiral
  ** and initialize the start direction as upwards (starting from lower left)
  */
  var directions = ['up', 'right', 'down', 'left'];
  var dirIndex = 0;
  var dir = directions[dirIndex];

  var last;                                                           // handles spiral intersections when the size is odd

  while (validate(matrix, coord[0], coord[1], dir)) {                 // as long as the right neighbor is valid, the spiral can continue
    matrix[coord[0]][coord[1]] = 1; // toggle
    var newCoords = check(matrix, coord[0], coord[1], dir);
    if (newCoords) {                                                  // if the square two steps ahead is valid, then update the coordinates
      coord = newCoords;
    } else {                                                          // otherwise, make a clockwise turn
      coord = validate(matrix, coord[0], coord[1], dir);              // update the coordinates and update the direction
      last = coord;
      dirIndex = (dirIndex + 1) % 4;
      dir = directions[dirIndex];
    }
  }

  if (size % 2) {                                                     // revert the very last toggle for an odd size, because of a spiral intersection
    matrix[last[0]][last[1]] = 0;
  }

  return matrix;
}


/*****************************
  **** HELPER FUNCTIONS ****
******************************/
var check = (matrix, x, y, dir) => {
  // checks if there is a block 2 spaces ahead of the current path
  // if valid, return the coordinate of the next square
  // otherwise return false
  switch(dir) {
    case 'down':
      if (matrix[x + 2] && !matrix[x + 2][y]) {
        return [x + 1, y];
      } else { return false };
    case 'left':
      if (!matrix[x][y - 2]) {
        return [x, y - 1];
      } else { return false };
    case 'up':
      if (!matrix[x - 2][y]) {
        return [x - 1, y];
      } else { return false };
    case 'right':
      if (!matrix[x][y + 2]) {
        return [x, y + 1];
      } else { return false };
    default:
      return false;
  }
}

var validate = (matrix, x, y, dir) => {
  // check is the square adjacent to the right is 0
  switch(dir) {
    case 'right':
      if (!matrix[x + 1][y]) {
        return [x + 1, y];
      } else { return false };
    case 'down':
      if (!matrix[x][y - 1]) {
        return [x, y - 1];
      } else { return false };
    case 'left':
      if (!matrix[x - 1][y]) {
        return [x - 1, y];
      } else { return false };
    case 'up':
      if (!matrix[x][y + 1]) {
        return [x, y + 1];
      } else { return false };
    default:
      return false;
  }
}

var createMatrix = n => { // creates a matrix of size N x N
  var matrix = [];
  for (var i = 0; i < n; i++) { matrix.push([]) };
  return matrix.map(arr => {
    for (var i = 0; i < n; i++) { arr.push(0) };
    return arr;
  })
}

// print out some sample cases, for sizes [6, 7, 8, 9, 10]
for (var i = 6; i <= 10; i++) {
  console.log('\n');
  console.log('Matrix spiral for size: ', i);
  console.log(arraySpiral(i));
}
