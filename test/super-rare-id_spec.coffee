superRareId = require '../index.js'

describe 'superRareId', ->

  it 'should generate different ids each time', ->
    assert.notDeepEqual superRareId(), superRareId()

  it 'should support a completely random id', ->
    assert.notDeepEqual superRareId.random().slice(0,5), superRareId.random().slice(0,5)
