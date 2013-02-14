function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}


function printBoard() {
  println("tower0: " + game.towers[0]);
  println("tower1: " + game.towers[1]);
  println("tower2: " + game.towers[2]);
}

function getMove() {
  var from = prompt("Which row would you like to move FROM.");
  var to = prompt("Which row would you like to mobe TO.");
  game.makeMove(parseInt(from), parseInt(to));
}



var game = TowersOfHanoi(3);
  game.initialize();
  printBoard();

  while (!game.gameWon()) {
    getMove();
    clear();
    printBoard();
  }

  println("Game Over");
