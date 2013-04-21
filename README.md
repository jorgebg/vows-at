Vows At
=======

> Even less redundant [vows](http://vowsjs.org)

Introduction
------------
This library should be used with [LiveScript](http://livescript.net) or [CoffeeScript](http://coffeescript.org).

It executes the *vows* in an scope where:
* `@topic` is the topic
* `@error` is the error if the topic was defined asynchronously
* `@` contains all the `assert` module functions redefined:
  * By default the first param is `@topic`.
  * If it is called with the same number of params that its original function, it expects that the first parameter is callable. It will call the function with `@topic` as its argument, and it will use the result as the first parameter for the assert.

The benefit of this is best seen with an example.

Example
--------

Here is a simple example written in `LiveScript`:

```livescript
require! {
  vows
  at: \vows-at
}

vows.describe 'Division by Zero'
  ..add-batch {
    'when dividing a number by zero':
      topic: -> 42 / 0
      'we get Infinity': at -> @equal Infinity
    
    'but when dividing zero by zero':
      topic: -> 0 / 0
      'we get a value which':
        'is not a number': at -> @is-NaN!
        'is not equal to itself': at -> @not-equal @topic
  }
  ..add-batch {
    'when the topic is an object':
      topic: -> { number: 0 / 0 }
      'you can check its properties easily': at -> @is-NaN (.number)
  }
  ..export module
```

For more examples check the `test` folder.