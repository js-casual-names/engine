(function(){
  "use strict";
  function Game(_name, _options){
    var options = _options;
    var name = _name;
    var status;

    var g =  {
      getName : getName,
      start : start,
      options : options
    };

    return g;

    function getName(){
      return name;
    }

    function start(){
      status = 'STARTED';
      console.log("started");
    }

  }

  module.exports = Game;

})();