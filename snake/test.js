var SnakeGame = require("./snake");

var snake = SnakeGame.snake;
var board = SnakeGame.board;
var game = SnakeGame.game;

board.initialize();

game.initialize(snake, board);
game.printBoard();
game.step("u");
game.printBoard();
game.step("l");
game.printBoard();
game.step("d");
game.printBoard();
game.step("r");
game.printBoard();