function shoppingList(arr) {
  arr.pop()
  let productArr = arr.shift().split('!')

  while (arr.length > 0) {
    let [command, product, newProduct] = arr.shift().split(' ')

    if (command == 'Urgent' && !productArr.includes(product)) {
      productArr.unshift(product)
    }

    if (command == 'Unnecessary' && productArr.includes(product)) {
      productArr = productArr.filter(el => el != product)
    }

    if (command == 'Correct' && productArr.includes(product)) {
      let index = productArr.indexOf(product)
      productArr.splice(index, 1, newProduct)
    }

    if (command == 'Rearrange' && productArr.includes(product)) {
      productArr = productArr.filter(el => el != product)
      productArr.push(product)
    }
  }

  return productArr.join(', ')
}

// console.log(shoppingList(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!',]))
