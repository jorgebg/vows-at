(function(){
  var assert, At, key, value;
  assert = require('assert');
  At = (function(){
    At.displayName = 'At';
    var prototype = At.prototype, constructor = At;
    function At(){
      if (arguments.length === 2) {
        this.error = arguments[0];
        this.topic = arguments[1];
      } else {
        this.topic = arguments[0];
      }
    }
    At.setAssert = function(key, value){
      return prototype[key] = function(){
        var topic, ref$, args, i$, v;
        if (arguments.length < value.length - 1) {
          topic = this.topic;
        } else {
          topic = (ref$ = arguments[0], delete arguments[0], ref$)(this.topic);
        }
        args = [topic];
        for (i$ in arguments) {
          v = arguments[i$];
          args.push(v);
        }
        return value.apply(value, args);
      };
    };
    return At;
  }());
  for (key in assert) {
    value = assert[key];
    if (typeof value === 'function') {
      At.setAssert(key, value);
    }
  }
  module.exports = function(callback){
    return function(){
      var at;
      at = Object.create(At.prototype);
      At.apply(at, arguments);
      return callback.apply(at, arguments);
    };
  };
}).call(this);
