function TowersOfHanoi(numTiles) {
  var game = {
    numTiles: numTiles,

    towers: [[],[],[]],

    initialize: function() {
      for(var i=this.numTiles; i>0; i--) {
        this.towers[0].push(i)
      }
    },

    makeMove: function(start, finish) {
      var piece = this.towers[start][this.towers[start].length-1];

      if (this.validMove(start, finish) == true) {
        piece = this.towers[start].pop();
        this.towers[finish].push(piece);
      } else {
        alert("Invalid move");
      }
    },

    validMove: function(start, finish) {
      var tower1 = this.towers[start];
      var tower2 = this.towers[finish];

      var piece = tower1[tower1.length-1];

      if (piece < tower2[tower2.length-1] || tower2[tower2.length-1] === null) {
        return true;
      } else if (tower2.length == 0) {
        return true;
      } else {
        return false;
      }
    },

    gameWon: function() {
      if (this.towers[2].length == this.numTiles) {
        return true;
      } else {
        return false;
      }
    },

    printTowers: function() {
      console.log("tower0: " + this.towers[0]);
      console.log("tower1: " + this.towers[1]);
      console.log("tower2: " + this.towers[2]);
    }
  }

  return game;
}
