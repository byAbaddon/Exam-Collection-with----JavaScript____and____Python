function safari(budget, fuel, dayOfWeek) {

    let fuelPrice = 2.10
    let gidPrice = 100
    let subtotal = fuel * fuelPrice + gidPrice
    
    dayOfWeek == 'Saturday' ? subtotal *= 0.90 : subtotal *= 0.80

    let total = Math.abs(budget - subtotal)

    if (budget >= subtotal)
        return `Safari time! Money left: ${total.toFixed(2)} lv.`
    return `Not enough money! Money needed: ${total.toFixed(2)} lv.`
}


//console.log(safari(120, 30, 'Saturday'))