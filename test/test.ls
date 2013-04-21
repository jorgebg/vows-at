require! {
  vows
  at: '../index'
}

describe = vows~describe

describe 'Division by Zero'
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
  ..export module