var towerCode = require("./towers_of_hanoi");
var game = towerCode.game;

console.log("numTiles " + game.numTiles);
console.log("towers " + game.printTowers());
console.log("initialize " + game.initialize());
console.log("towers after initialize " + game.printTowers());
console.log("make first move " + game.makeMove(0, 1));
console.log("towers after first move " + game.printTowers());
console.log("make invalid move " + game.makeMove(0, 1));
console.log("towers after invalid move " + game.printTowers());
console.log("make move where piece is null " + game.makeMove(2, 1));
console.log("towers after invalid move " + game.printTowers());
console.log("game won should be " + game.gameWon());
