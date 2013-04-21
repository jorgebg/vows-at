(function(){
  var vows, at, describe, x$;
  vows = require('vows');
  at = require('../index');
  describe = bind$(vows, 'describe');
  x$ = describe('Division by Zero');
  x$.addBatch({
    'when dividing a number by zero': {
      topic: function(){
        return 42 / 0;
      },
      'we get Infinity': at(function(){
        return this.equal(Infinity);
      })
    },
    'but when dividing zero by zero': {
      topic: function(){
        return 0 / 0;
      },
      'we get a value which': {
        'is not a number': at(function(){
          return this.isNaN();
        }),
        'is not equal to itself': at(function(){
          return this.notEqual(this.topic);
        })
      }
    }
  });
  x$['export'](module);
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
