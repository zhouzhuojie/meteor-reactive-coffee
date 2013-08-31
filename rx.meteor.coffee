_.extend rx, {
  meteor:
    find: (collection, selector={}, options={}) ->
      if collection instanceof Meteor.Collection
        rxa = rx.array()
        cursor = collection.find(selector, options)
        data_func = ->
          cursor.rewind()
          cursor.fetch()
        Deps.autorun ->
          data = data_func()
          if data.length isnt 0
            rxa.replace(data)
        return rxa
      else
        throw new Error "#{collection} should be an instance of Meteor.Collection"
        return null

    findOne: (collection, selector={}, options={}) ->
      if collection instanceof Meteor.Collection
        rxc = rx.cell({})
        data_func = ->
          collection.findOne(selector, options)
        Deps.autorun ->
          data = data_func()
          rxc.set(data) if data?
        return rxc
      else
        throw new Error "#{collection} should be an instance of Meteor.Collection"
        return null
}
