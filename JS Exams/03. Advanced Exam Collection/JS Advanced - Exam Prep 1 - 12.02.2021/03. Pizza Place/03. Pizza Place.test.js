const {assert, expect} =  require('chai')
const pizzUni = require('../03. Pizza Place')


describe('Test functionality of  =>>>   pizzUni', () => {

  describe('Test function makeAnOrder', () => {
  it('1) Test is order correct', () => {
    assert(pizzUni.makeAnOrder({orderedPizza: 'Hut', orderedDrink: 'Cola'}) ,'You just ordered Hut and Cola.')
  })
    
  it('2) Test is order only pizza', () => {
    assert(pizzUni.makeAnOrder({orderedPizza: 'Hut', orderedDrink: ''}) ,'You just ordered Hut')
  })
    
  it('3 orderedPizza doesn\'t exist', () => {
    expect(() => pizzUni.makeAnOrder({orderedDrink: 'drink'})).to.throw('You must order at least 1 Pizza to finish the order.');
  })

  it('4) orderedDrink does exist', () => {
    expect(pizzUni.makeAnOrder({orderedPizza: 'pizza', orderedDrink: 'drink'})).to.equal("You just ordered pizza and drink.");
  })

  it('5)ordered drink does not exist', () => {
    expect(pizzUni.makeAnOrder({orderedPizza: 'pizza'})).to.equal(`You just ordered pizza`);
  })
    
    
  })


  describe('Test function getRemainingWork', () => {
    it('1) Test is order complete', () => {
      assert(pizzUni.getRemainingWork( [{pizzaName: 'Hut' ,  status: 'ready'}]) ,'All orders are complete!')
    })

    it('2) Test is order complete', () => {
      assert(pizzUni.getRemainingWork( [{pizzaName: 'Hut' ,  status: 'preparing'}]) ,'The following pizzas are still preparing: Hut.')
    })
      
    it(`3) input -> { orderedPizza: 'a' } - output -> 'You just ordered a'`,
			() => {
				expect(pizzUni.makeAnOrder({ orderedPizza: 'a' })).to
					.eq('You just ordered a')
			}
    )
    
		it(`4) input -> { orderedPizza: 'a', orderedDrink: 'b' } - 
			output -> 'You just ordered a and b.'`, () => {
			expect(pizzUni.makeAnOrder({
				orderedPizza: 'a', orderedDrink: 'b'
			})).to
				.eq('You just ordered a and b.')
    })
    
		it(`5) throws if input is not an object`, () => {
			expect(() => pizzUni.makeAnOrder(1)).to.throw()
    })
    
		it(`6) throws if inputObj.orderedPizza not present`, () => {
			expect(() => pizzUni.makeAnOrder({})).to.throw()
		})

    })
  

    describe('Test function  orderType', () => {
      it('1) Test price', () => {
        assert(pizzUni.orderType(100, 'Carry Out'), 90)
      })
  
      it('2) Test discount', () => {
        assert(pizzUni.orderType( 100, 'Delivery'), 100)
      })

      it(`3) happy path: input -> [{pizzaName: 'a', status: 'ready'}], 
				output -> All orders are complete!`, () => {
			expect(pizzUni.getRemainingWork([
				{
					pizzaName: 'a', status: 'ready'
				}
			])).to.eq('All orders are complete!')
      })
      
		it(`4) happy path: input -> [
			{ pizzaName: 'a', status: 'ready' },
			{ pizzaName: 'b', status: 'preparing' },
			{ pizzaName: 'c', status: 'preparing' },
		}], 
				output -> The following pizzas are still preparing: b, c.`,
			() => {
				expect(pizzUni.getRemainingWork([
					{ pizzaName: 'a', status: 'ready', },
					{ pizzaName: 'b', status: 'preparing' },
					{ pizzaName: 'c', status: 'preparing' },
				])).to.eq('The following pizzas are still preparing: b, c.')
			}
		)
  
		it(`5) throws if input not array`, () => {
			expect(() => pizzUni.getRemainingWork(1)).to.throw()
		})
	})


		it(`input -> [1, 'Carry Out'], output -> 0.9`, () => {
			expect(pizzUni.orderType(1, 'Carry Out')).to.eq(0.9)
    })
    
		it(`7) input -> [1, 'Delivery'], output -> 1`, () => {
			expect(pizzUni.orderType(1, 'Delivery')).to.eq(1)
		})
        
    
})