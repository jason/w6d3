var game = TicTacToe();
game.initialize();

var Player1 = {
  mark: "x"
};

var Player2 = {
  mark: "y"
};

function getMove(mark) {
  var rowInput = prompt("Which row?");
  var colInput = prompt("Which column?");
  rowInput = parseInt(rowInput);
  colInput = parseInt(colInput);
  game.placeMark(rowInput, colInput, mark);
}

row1 = $("#row1");
row2 = $("#row2");
row3 = $("#row3");

function printRow(arr, dom) {
  var row = [];

  for (var i=0; i<arr.length; i++) {
    if (arr[i] == null) {
      row[i] = " _ ";
    } else {
      row[i] = " " + arr[i] + " ";
    }
  }

  dom.html(row);
}

function printBoard() {
  printRow(game.board[0], row1);
  printRow(game.board[1], row2);
  printRow(game.board[2], row3);
}

printBoard();

while (game.gameWin() != true) {
  $("#output").html("Player1's turn");
  getMove(Player1.mark);
  printBoard();

  if (game.gameWin() == true) {
    break;
  }

  $("#output").html("Player2's turn");
  getMove(Player2.mark);
  printBoard();
}

$("#output").html("Game over!");
