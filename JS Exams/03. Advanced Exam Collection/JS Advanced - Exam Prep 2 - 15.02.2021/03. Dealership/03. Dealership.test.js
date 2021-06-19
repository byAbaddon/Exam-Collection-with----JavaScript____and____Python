const {assert, expect}  = require('chai')

const {newCarCost, carEquipment, euroCategory}  = require('../03. Dealership')


describe('Test func newCarCost', function(){
	it('Get discount' , () => {
    assert.equal(newCarCost('Audi A4 B8', 1000), -14000  )    
  })

	it('No discount' , () => {
    assert.equal(newCarCost(newCarCost('Ford Ka', 1000), 1000), 1000 )    
  })
   
})


describe('Test func carEquipment', function(){
	it('Check extras' , () => {
    assert.equal(carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0]), 'heated seats' )    
  })

	describe(`carEquipment() method`, () => {
		it(
			`returns correctly the indexes passed as second argument, from array passed as first`,
			() => {
				expect(dealership.carEquipment(['a', 'b'], [0, 1])).to.deep.equal(['a', 'b'])
			}
		)
	})
})


describe('Test hight category ', function(){
  
  it('discount 5%', () => {
    expect(dealership.euroCategory(4)).to
      .equal('We have added 5% discount to the final price: 14250.')
  })

	it('Test low category' , () => {
    assert.equal(euroCategory(1), 'Your euro category is low, so there is no discount from the final price!')  
  })
   
})
