function movieProfit(moveName, days, ticketsCount, ticketPrice, cinemaPercent){
    let cinemaPrice = ticketsCount * ticketPrice  * days
    let subtotal = cinemaPrice * cinemaPercent / 100
    let total = cinemaPrice - subtotal

    return `The profit from the movie ${moveName} is ${total.toFixed(2)} lv.`
}

//console.log(movieProfit('The Programmer', 20, 500, 7.50, 7))
