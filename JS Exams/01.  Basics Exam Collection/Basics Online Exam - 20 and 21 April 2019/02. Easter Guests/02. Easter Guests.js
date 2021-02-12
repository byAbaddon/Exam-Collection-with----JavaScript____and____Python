function easterGuests(guestsCount, budget) {
    
    let oneCakePrice = 4
    let oneEggPrice = 0.45
    let allCakes = Math.ceil(guestsCount / 3)
    let allEggs = guestsCount * 2
    let cakesPrice = allCakes * oneCakePrice
    let eqq_price = allEggs * oneEggPrice
    let totalPrice = cakesPrice + eqq_price

    if (totalPrice <= budget)
        return `Lyubo bought ${allCakes} Easter bread and ${allEggs} eggs.\nHe has ${(budget - totalPrice).toFixed(2)} lv. left.`
    return `Lyubo doesn\'t have enough money.\nHe needs ${(totalPrice - budget).toFixed(2)} lv. more.`
}

//console.log(easterGuests(10, 35))