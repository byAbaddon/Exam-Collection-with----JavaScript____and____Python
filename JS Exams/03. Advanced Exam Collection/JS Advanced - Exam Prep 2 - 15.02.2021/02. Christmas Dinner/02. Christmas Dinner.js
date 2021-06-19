class ChristmasDinner {
  constructor(budget) {
    this.budget = budget
    if (this.budget < 0) throw 'The budget cannot be a negative number'
    this.dishes = []
    this.products = []
    this.guests = {}
  }

  shopping(product) {
    const [type, price] = [...product]
    if (this.budget < price) throw 'Not enough money to buy this product'
    this.products.push(type)
    this.budget -= price
    return `You have successfully bought ${type}!`
  }

  recipes(recipe) {
    let isIncludesAllProducts = recipe.productsList
      .filter(x => this.products.includes(x) ? null : -1)
    
    if (isIncludesAllProducts.length) throw 'We do not have this product'

    this.dishes.push(recipe)
    return `${recipe.recipeName} has been successfully cooked!`
  }

  inviteGuests(guestName, dish) {
    if (!this.dishes.find(x => x.recipeName == dish)) throw 'We do not have this dish'
    if (this.guests[guestName]) throw 'This guest has already been invited'
  
    this.guests[guestName] = dish
    return `You have successfully invited ${guestName}!`
  }
  
  showAttendance() {
    return Object.entries(this.guests).map(([name, dish]) =>
      `${name} will eat ${dish}, which consists of ${this.dishes.find(x => x.recipeName == dish).productsList.join(', ')}`)
      .join('\n')
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

// console.log(dinner.showAttendance())