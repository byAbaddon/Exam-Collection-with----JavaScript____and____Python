class Restaurant {
  constructor(budgetMoney = Number) {
    this.budgetMoney = budgetMoney
    this.menu = {}
    this.stockProducts = {}
    this.history = []
  }

  loadProducts(products = []) {
    for (const data of products) {
      const [productName, productQuantity, productTotalPrice] = data.split(' ').map(el => Number(el) || el)
      if (this.budgetMoney >= productTotalPrice) {
        this.budgetMoney -= productTotalPrice

        if (!this.stockProducts.hasOwnProperty(productName)) this.stockProducts[productName] = 0
        this.stockProducts[productName] += productQuantity

        this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
      } else {
        this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
      }
    }
  //  console.log(this.history.join('\n'));
    return this.history.join('\n')
  }


  addToMenu(meal = String, neededProducts = [], price = Number) {
    if (this.menu[meal]) 
      return `The ${meal} is already in the our menu, try something different.`
    
    this.menu[meal] = { neededProducts, price }
    let quantity = Object.keys(this.menu).length

    if (quantity == 1) 
        return `Great idea! Now with the ${meal} we have ${quantity} meal in the menu, other ideas?`
      return `Great idea! Now with the ${meal} we have ${quantity} meals in the menu, other ideas?`
   
  }

  showTheMenu() {
    if (Object.keys(this.menu).length == 0) return 'Our menu is not ready yet, please come later...'
    let mealCollection = []
    for (const key in this.menu)
      mealCollection.push(`${key} - $ ${this.menu[key].price}`)
    return mealCollection.join('\n')
}

  makeTheOrder(meal=String) {
    if (!this.menu[meal]) 
      return `There is not ${meal} yet in our menu, do you want to order something else?`

    for (const items of this.menu[meal].neededProducts) {
      const [product, count] = items.split(' ')
      if (!this.stockProducts[product] ) 
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
      
      let isExist = this.stockProducts[product] -= count
      if (isExist <= 0) 
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        
      this.budgetMoney += this.menu[meal].price
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
  }

}


let kitchen = new Restaurant(1000)
//1
kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50'])
//2
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55))
//3
console.log(kitchen.showTheMenu());
//4
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1'])
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99)

console.log(kitchen.makeTheOrder('frozenYogurt'));





/*
Successfully loaded 10 Banana
Successfully loaded 20 Banana
Successfully loaded 50 Strawberries
Successfully loaded 10 Yogurt
There was not enough money to load 500 Yogurt
Successfully loaded 5 Honey

Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
Great idea! Now with the Pizza we have 2 meal in the menu, other ideas?

frozenYogurt - $ 9.99
Pizza - $ 15.55

Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.
*/


