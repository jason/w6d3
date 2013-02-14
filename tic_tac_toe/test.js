var ticTacToe = require("./tic_tac_toe");
var game = ticTacToe.game;

game.initialize();
game.placeMark(0, 1, "x");
game.placeMark(2, 1, "x");
game.placeMark(1, 1, "x");
// game.showBoard();
// console.log(game.checkWin([[0, 0], [1, 0], [2, 0]]));
console.log("is the game won on a row?" + game.gameWin());
game.showBoard();

// console.log("towers " + game.printTowers());
// console.log("initialize " + game.initialize());
// console.log("towers after initialize " + game.printTowers());
// console.log("make first move " + game.makeMove(0, 1));
// console.log("towers after first move " + game.printTowers());
// console.log("make invalid move " + game.makeMove(0, 1));
// console.log("towers after invalid move " + game.printTowers());
// console.log("make move where piece is null " + game.makeMove(2, 1));
// console.log("towers after invalid move " + game.printTowers());
// console.log("game won should be " + game.gameWon());
