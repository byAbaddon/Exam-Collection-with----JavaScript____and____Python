class ChristmasDinner {
  constructor(budget, dishes, products, guests) {
    this.budget = budget
    this.products = []
    this.dishes = []
    this.guests = {}
  }

  get budget() {
    return this._budget
  }

  set budget(input) {
    if (input < 0) {
      throw new Error('The budget cannot be a negative number')
    }
    this._budget = input
  }

  shopping(product) { 
    let [typeProduct, price] = product
    if (this.budget < price) {
      throw new Error('Not enough money to buy this product')
    }
    this.budget -= price
    this.products.push(typeProduct)
    return `You have successfully bought ${typeProduct}!`
  }

  recipes(recipe) {
    for (const product of recipe.productsList) {
      if (!this.products.includes(product)) {
        throw new Error('We do not have this product')
      }

      this.dishes.push(recipe)
      return `${recipe.recipeName} has been successfully cooked!`
    }
  }

  inviteGuests(name, dish) {
    let result = this.dishes.find(r => r.recipeName === dish)
    if (result) {
      if (this.guests.hasOwnProperty(name)) { //name
        throw new Error('This guest has already been invited')
      }

      this.guests[name] = dish
      return `You have successfully invited ${name}!`

    } else {
      throw new Error('We do not have this dish')
    }
  }

  showAttendance() {
    let res = ''
    for (const el in this.guests) {
      let a = this.dishes.find(r => r.recipeName === this.guests[el] ? r.recipeName : null)
      res += `${el} will eat ${this.guests[el]}, which consists of ${a.productsList.join(', ')}\n`
    }
    return res.trim()
  }

}


// let dinner = new ChristmasDinner(300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);


// dinner.recipes({
//   recipeName: 'Oshav',
//   productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//   recipeName: 'Folded cabbage leaves filled with rice',
//   productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//   recipeName: 'Peppers filled with beans',
//   productsList: ['Beans', 'Peppers', 'Salt']
// });

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());