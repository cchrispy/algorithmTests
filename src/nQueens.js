/*
** How many ways can N queens be placed on an N x N chessboard
** such that none of the queens can attack each other?
** That is, no two queens can share the same row, column, or diagonal.
*/


/********************************************
************* HELPER FUNCTIONS **************
********************************************/

// Function to generate an empty board, filled with 0's, of size N x N
var genBoard = n => {
  let board = [];
  for (let i = 0; i < n; i++) {
    var row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
}

// Function to check rows for availability
var checkRow = (coord, board) => {
  var row = coord[0];
  var col = coord[1];
  return board[row].reduce((ok, cur, i) => {
    if (!ok) {
      return false;
    }
    if (i !== col && cur) {
      return false;
    } else {
      return true;
    }
  }, true)
}

// Function to check columns for availability
var checkCol = (coord, board) => {
  var row = coord[0];
  var col = coord[1];
  return board.reduce((ok, cur, i) => {
    if (!ok) {
      return false;
    }
    if (i !== row && cur[col]) {
      return false;
    } else {
      return true;
    }
  }, true)
}

var checkRightDiag = (coord, board) => {
  var row = coord[0];
  var col = coord[1];
  var low = row <= col ? row : col;
  var x = row - low;
  var y = col - low;
  while (x < board.length && y < board.length) {
    if (board[x][y] && x !== row && y !== col) {
      return false;
    }
    x++;
    y++;
  }
  return true;
}

var checkLeftDiag = (coord, board) => {
  var row = coord[0];
  var col = coord[1];
  var low = row <= board.length - 1 - col ? row : board.length - 1 - col;
  var x = row - low;
  var y = col + low;
  while (x < board.length && y >= 0) {
    if (board[x][y] && x !== row && y !== col) {
      return false;
    }
    x++;
    y--;
  }
  return true;
}

// Function to check diagonal availabilities
var checkDiag = (coord, board) => checkLeftDiag(coord, board) && checkRightDiag(coord, board);

// Checks all availabilities
var check = (coord, board) => checkRow(coord, board) && checkCol(coord, board) && checkDiag(coord, board);

/****************************************************************************************************/
/****************************************************************************************************/
/****************************************************************************************************/


var nQueens = (n, state, coord = [0, 0]) => {

  var board = state || genBoard(n);

}


export default nQueens;