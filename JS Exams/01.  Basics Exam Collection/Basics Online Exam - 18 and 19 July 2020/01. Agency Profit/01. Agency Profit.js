function agencyProfit(arg) {
  let [company, tickets, childrenTickets, ticketPrice, tax] = arg.map(el => Number(el) || el)
  let adults = ticketPrice + tax
  let children = ticketPrice * 0.3 + tax
  let allTicketsPrice = adults * tickets + children * childrenTickets
  return (`The profit of your agency from ${company} tickets is ${(allTicketsPrice * 0.2).toFixed(2)} lv.`)
}

console.log(agencyProfit(["WizzAir", "15", "5", "120", "40"]))

