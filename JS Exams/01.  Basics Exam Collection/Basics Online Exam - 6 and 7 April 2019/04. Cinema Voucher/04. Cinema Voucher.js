function cinemaVoucher(...arg) {
    let voucher = arg.shift()
    let listPurchase = [...arg.filter(x => x !== 'End')]
    let count_tickets = 0
    let count_purchase = 0

    for (let i = 0; i < listPurchase.length; i++) {
        let currentSum = 0
        if (listPurchase[i].length > 8) {
            currentSum += listPurchase[i][0].charCodeAt(0) + listPurchase[i][1].charCodeAt(0)
            if (voucher >= currentSum) {
                count_tickets++
                voucher -= currentSum
            }
        } else {
            currentSum += listPurchase[i][0].charCodeAt(0)
            if (voucher >= currentSum) {
                count_purchase++
                voucher -= currentSum
            } else
                break
        }
    }

    return `${count_tickets}\n${count_purchase}`
}

//console.log(cinemaVoucher(300, 'Captain Marvel', 'popcorn', 'Pepsi'))
//console.log(cinemaVoucher(1500, 'Avengers: Endgame', 'Bohemian Rhapsody', 'Deadpool 2', 'End'))