function Snake() {
  var snake = {

    size: 1,

    body: "+",

    direction: undefined,

    location: undefined,

    turn: function(direction) {
      this.direction = direction;
    },

    grow: function() {
      this.size += 3;
    }
  };

  return snake;
}

function Board () {
  var board = {

    eatpiece: "x",

    location: undefined,

    board: [],

    initialize: function() {
      //row 0
      var row = []
      for (var i=0; i<20; i++) {
        row.push("*");
      };
      this.board[0]= row;
      //row 1-18
      for (var i=1; i<19; i++) {
        this.board.push(new Array());
        this.board[i][0]= "*";
        this.board[i][19]= "*";
      };
      //row 19
      this.board[19]= row;
    }


  };

  return board
}

function Game () {
  var game = {

    snake: undefined,

    board: undefined,

    directions: {
      "u": [-1, 0],
      "d": [1, 0],
      "l": [0, -1],
      "r": [0, 1]
    },

    initialize: function(snake, board) {
      this.snake = snake;
      this.board = board;

      this.setPiece(this.board);
      this.setPiece(this.snake);
    },

    randomize: function () {
      var max = this.board.board.length - 2;
      var min = 1;
      coord = Math.floor(Math.random() * (max - min +1) + min);
      return coord;
    },

    setPiece: function(piece) {
      var randX = this.randomize();
      var randY = this.randomize();

      while (this.board.board[randY][randX] != null) {
        randX = this.randomize();
        randY = this.randomize();
      }

      piece.location = [randY, randX];
    },

    hitWall: function (courseOfAction) {
      var y = this.snake.location[0] + courseOfAction[0];
      var x = this.snake.location[1] + courseOfAction[1];

      if (y == 0 || y == 19) {
        return true;
      } else if (x == 0 || x == 19) {
        return true;
      }

      return false;
    },

    step: function(direction) {
      var courseOfAction = this.directions[direction];

      if (!this.hitWall(courseOfAction)) {
      this.snake.location[0] += courseOfAction[0];
      this.snake.location[1] += courseOfAction[1];
      } else {
        console.log("Game over!");
      }
    },

    printBoard: function() {
      var s = this.snake.location;
      var e = this.board.location;

      this.board.board[s[0]][s[1]]= this.snake.body;
      this.board.board[e[0]][e[1]]= this.board.eatpiece;

      for (var i=0; i<this.board.board.length; i++) {
        console.log("row " + i + ": " + this.board.board[i]);
      };

      this.board.board[s[0]][s[1]]= null;
      this.board.board[e[0]][e[1]]= null;
    }
  };

  return game;
}





module.exports = {
  board: Board(),
  snake: Snake(),
  game: Game()
}