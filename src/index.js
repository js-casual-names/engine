//http://mkuklis.github.io/tictactoe/docs/tictactoe.html
engine = require("./engine");
tictactoe = require("./tictactoe");

var tic = engine.newGame("TicTacToe", { players : 2, size : 3} );
tic.start();
tic.nextMove({ player : 0, row : 0, col : 0});
tic.nextMove({ player : 1, row : 1, col : 0});
tic.nextMove({ player : 0, row : 2, col : 0});

tic.nextMove({ player : 1, row : 0, col : 1});
tic.nextMove({ player : 0, row : 1, col : 1});
tic.nextMove({ player : 1, row : 2, col : 1});

tic.nextMove({ player : 0, row : 0, col : 2});