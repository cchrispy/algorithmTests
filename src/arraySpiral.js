// Array spiral  
// Given a positive integer N, return a N x N matrix with a spiral pattern. 
// The pattern will spiral inwards starting from a corner, and no leg of the spiral
// can be immediately adjacent to another leg of the spiral (parts of the spiral can't touch side-to-side).
/*
size: 5  [[1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0],
          [1, 0, 1, 1, 1],
          [1, 0, 0, 0, 1],
          [1, 1, 1, 1, 1]]

size: 6  [[1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0],
          [1, 0, 1, 1, 1, 1],
          [1, 0, 1, 0, 0, 1],
          [1, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1]]
*/

var arraySpiral = size => {
  var matrix = createMatrix(size); // generate a matrix



  return matrix;
}

var createMatrix = n => { // creates a matrix of size N x N
  var matrix = [];
  for (var i = 0; i < n; i++) { matrix.push([]) };
  return matrix.map(arr => {
    for (var i = 0; i < n; i++) { arr.push(0) };
    return arr;
  })
}

console.log(arraySpiral(5));

// export default arraySpiral;