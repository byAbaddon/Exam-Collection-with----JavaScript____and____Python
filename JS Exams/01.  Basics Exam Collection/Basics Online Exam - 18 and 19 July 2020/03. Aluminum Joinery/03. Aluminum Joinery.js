function aluminumJoinery([order, model, delivery_type]) {
    order = parseInt(order)
    let price = 0

    if (order < 10) return 'Invalid order'

    if (model == '90X130') {
        price = 110
        if (30 < order && order <= 60) price *= 0.95
        else if (order > 60) price *= 0.92
    } else if (model == '100X150') {
        price = 140
        if (40 < order && order <= 80) price *= 0.94
        else if (order > 80) price *= 0.90

    } else if (model == '130X180') {
        price = 190
        if (20 < order && order <= 50) price *= 0.93
        else if (order > 50) price *= 0.88

    } else if (model == '200X300') {
        price = 250
        if (25 < order && order <= 50) price *= 0.91
        else if (order > 50) price *= 0.86

    }

    price *= order

    if (delivery_type == 'With delivery') price += 60
    if (order > 99) price *= 0.96

    return `${price.toFixed(2)} BGN`
}

// console.log(aluminumJoinery(["40", "90X130", "Without delivery"]))