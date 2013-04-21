(function(){
  var vows, at, theGoodThings, describe, Strawberry, Banana, PeeledBanana, x$;
  vows = require('vows');
  at = require('../index');
  theGoodThings = require('./the-good-things');
  describe = bind$(vows, 'describe');
  Strawberry = theGoodThings.Strawberry, Banana = theGoodThings.Banana, PeeledBanana = theGoodThings.PeeledBanana;
  x$ = describe('The Good Things');
  x$.addBatch({
    'A strawberry': {
      topic: new Strawberry,
      'is red': at(function(){
        return this.equal(function(it){
          return it.color;
        }, '#ff0000');
      }),
      'and tasty': at(function(){
        return this.isTrue(function(it){
          return it.isTasty();
        });
      })
    },
    'A banana': {
      topic: new Banana,
      'when peeled *synchronously*': {
        topic: function(banana){
          return banana.peelSync();
        },
        'returns a `PeeledBanana`': at(function(){
          return this.instanceOf(PeeledBanana);
        })
      },
      'when peeled *asynchronously*': {
        topic: function(banana){
          return banana.peel(this.callback);
        },
        'results in a `PeeledBanana`': at(function(){
          return this.instanceOf(PeeledBanana);
        })
      }
    }
  });
  x$['export'](module);
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
