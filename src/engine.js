"use strict";
(function(){
  var game = require("./game_abstract.js");
  var games = [];

  var GameEngine = {
    registerGame : registerGame,
    newGame : newGame
  };

  function registerGame(name, factory){
    games[name] = factory;
  }

  function newGame(name, options){
    return games[name](options);
  }

  module.exports = GameEngine;

})()
