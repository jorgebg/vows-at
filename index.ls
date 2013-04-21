require! assert

class At
  ->
    if &length is 2
      @error = &0
      @topic = &1
    else
      @topic = &0

  @set-assert = (key, value) ->
    ::[key] = ->
      if &length < value.length-1
        topic = @topic
      else
        topic = (delete &0) @topic
      args = [ topic ]
      for ,v of &
        args.push v
      value.apply value, args


for key, value of assert
  if typeof value is \function
    At.set-assert key, value

module.exports = \
(callback) ->
  #Returns a wrapper for callback
  ->
    #Creates a new At with the current arguments
    at = Object.create(At::)
    At.apply at,&

    #Call using the new object as scope
    callback.apply at, &

