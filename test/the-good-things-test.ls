require! {
  vows
  at: '../index'
  './the-good-things'
}

describe = vows~describe
{Strawberry, Banana, PeeledBanana} = the-good-things

describe 'The Good Things'
  ..add-batch {
    'A strawberry':
      topic: new Strawberry
      'is red': at -> @equal (.color), \#ff0000
      'and tasty': at -> @is-true (.is-tasty!)
    
    'A banana':
      topic: new Banana
      'when peeled *synchronously*':
        topic: (banana) -> banana.peel-sync!
        'returns a `PeeledBanana`': at ->
          @instance-of PeeledBanana
      
      'when peeled *asynchronously*':
        topic: (banana) -> banana.peel @callback
        'results in a `PeeledBanana`': at ->
          @instance-of PeeledBanana
  }
  ..export module
