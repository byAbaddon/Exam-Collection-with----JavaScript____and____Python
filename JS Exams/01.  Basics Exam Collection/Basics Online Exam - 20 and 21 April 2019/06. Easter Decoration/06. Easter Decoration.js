function easterDecoration(arg) {
    let numberClients = arg.shift()
    let subtotalSum = 0
    let totalSum = 0
    const priceObj = { 'basket': 1.50, 'wreath' : 3.80, 'chocolate bunny' : 7}

    for (let i = 0; i < numberClients; i++) {
        subtotalSum = 0
        let itemCount = 0
        while (true) {
            current = arg.shift()
            if (current !== 'Finish') {
                subtotalSum += priceObj[current]
                itemCount++
            } else {
                itemCount % 2 === 0 ? subtotalSum *= 0.80 : null
                totalSum += subtotalSum
                console.log(`You purchased ${itemCount} items for ${subtotalSum.toFixed(2)} leva.`)
                break
            }
        }
    }

    console.log(`Average bill per client is: ${(totalSum / numberClients).toFixed(2)} leva.`)
}

//easterDecoration([2, 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish'])
//easterDecoration([1, 'basket','wreath','chocolate bunny','wreath','basket','chocolate bunny','Finish'])