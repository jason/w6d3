function TicTacToe() {
  var game = {

    board: undefined,

    initialize: function() {
      this.board =  [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    },

    showBoard: function() {
      console.log(this.board[0]);
      console.log(this.board[1]);
      console.log(this.board[2]);
    },

    placeMark: function(x, y, mark) {
      if (this.board[x][y] === null) {
        this.board[x][y] = mark;
      } else {
        console.log("Invalid Move");
      }
    },

    checkWin: function(win) {
      var boardState = this.board;

      var slice = [];
      _.map(win, function(pair) {
        slice.push(boardState[pair[0]][pair[1]]);
      });

      if (slice[0] === slice[1] && slice[1] === slice[2] && slice[0] !== null) {
        return true;
      } else {
        return false;
      }

    },

    row: function(row) {
     var row = [[row, 0], [row, 1], [row, 2]];
     return row;
    },

    col: function(col) {
      var col = [[0, col], [1, col], [2, col]];
      return col;
    },

    rowWin: function() {
      for(var i=0; i<3; i++) {
        var row = this.row(i);
        if (this.checkWin(row) == true) {
          return true;
        }
      }

      return false;
    },

    colWin: function() {
      for(var i=0; i<3; i++) {
        var col = this.col(i);
        if (this.checkWin(col) == true) {
          return true;
        }
      }

      return false;
    },

    upDiagWin: function() {
      var diag = [[0, 0], [1, 1], [2, 2]];
      return this.checkWin(diag);
    },

    downDiagWin: function() {
      var diag = [[0, 2], [1, 1], [2, 0]];
      return this.checkWin(diag);
    },

    gameWin: function() {
      if (this.rowWin() == true) {
        return true;
      } else if (this.colWin() == true) {
        return true;
      } else if (this.upDiagWin() == true) {
        return true;
      } else if (this.downDiagWin() == true) {
        return true;
      } else {
        return false;
      }
    }
  }

  return game;
}

// module.exports = {
//   game: TicTacToe()
// };