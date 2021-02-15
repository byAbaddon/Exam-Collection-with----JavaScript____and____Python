function foodDelivery(chicken_numbers, fish_numbers, vegetable_numbers) {
    chicken_numbers *= 10.35
    fish_numbers *= 12.40
    vegetable_numbers *= 8.15
    let dessert = 1.20
    let delivery = 2.50

    let subtotal = chicken_numbers + fish_numbers + vegetable_numbers
    let total = subtotal * dessert + delivery

    return `Total: ${total.toFixed(2)}`
}

//console.log(foodDelivery(2, 4, 3))