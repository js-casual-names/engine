(function(){
  "use strict";
  var Game = require("./game_abstract");
  var GameEngine = require("./engine");

  function TicTacToe(options) {
    var g;

    g = Game("tic-tac-toe", options);
    g.start = start;
    g.nextMove = nextMove;
    g.currentPlayer = 0;
    g.board = []
    return g;

    function start() {
      g.currentPlayer = 0;
      g.board = createBoard(g.options.size, g.options.size);
    }

    function nextMove(move) {
      console.log("mossa ", move);
      if (move.player === g.currentPlayer) {
        if (g.board[move.row][move.col] !== undefined) {
          console.error(move, "DUPLICATE", g.board[move.row][move.col]);
        }else{
          g.board[move.row][move.col] = g.currentPlayer;
          g.currentPlayer = ++g.currentPlayer % 2;
        }
      } else {
        console.error("PLAYER SBAGLIATO");
      }
      printBoard(g.board);
    }

    function checkWin() {

    }
  }

  function createBoard(rows, columns){
    var x = new Array(rows);

    for (var i = 0; i < rows; i++) {
      x[i] = new Array(columns);
    }
    return x;
  }
  function printBoard(board){
    for(var i = 0; i < board.length; i++){
      console.log(board[i]);
    }
  }




  GameEngine.registerGame("TicTacToe", TicTacToe);
})();