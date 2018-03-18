const SimpleStorage = artifacts.require('SimpleStorage')

contract('SimpleStorage - Stores value', accounts => {

  it('Correctly stores value', async () => {
    let simplestorage
    const value = 4

    //deploy
    simplestorage = await SimpleStorage.new()
    assert.ok(simplestorage)
    //Set value
    await simplestorage.set(value)
    //Ceck value
    assert.equal(await simplestorage.storedData(), value)
  })
})
