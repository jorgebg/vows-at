(function(){
  var Strawberry, Banana, PeeledBanana;
  Strawberry = (function(){
    Strawberry.displayName = 'Strawberry';
    var prototype = Strawberry.prototype, constructor = Strawberry;
    function Strawberry(color){
      this.color = color != null ? color : '#ff0000';
    }
    prototype.isTasty = function(){
      return true;
    };
    return Strawberry;
  }());
  Banana = (function(){
    Banana.displayName = 'Banana';
    var prototype = Banana.prototype, constructor = Banana;
    function Banana(color){
      this.color = color != null ? color : '#fff333';
    }
    prototype.peel = function(callback){
      return process.nextTick(function(){
        return callback(null, new PeeledBanana);
      });
    };
    prototype.peelSync = function(){
      return new PeeledBanana;
    };
    return Banana;
  }());
  PeeledBanana = (function(){
    PeeledBanana.displayName = 'PeeledBanana';
    var prototype = PeeledBanana.prototype, constructor = PeeledBanana;
    function PeeledBanana(){}
    return PeeledBanana;
  }());
  module.exports = {
    Strawberry: Strawberry,
    Banana: Banana,
    PeeledBanana: PeeledBanana
  };
}).call(this);
