class Strawberry
  (@color=\#ff0000) ->
  is-tasty: -> true


class Banana
  (@color=\#fff333) ->
  peel: (callback) ->
    process.next-tick -> callback null, new PeeledBanana
  peel-sync: ->
    new PeeledBanana

class PeeledBanana


module.exports = { Strawberry, Banana, PeeledBanana }
