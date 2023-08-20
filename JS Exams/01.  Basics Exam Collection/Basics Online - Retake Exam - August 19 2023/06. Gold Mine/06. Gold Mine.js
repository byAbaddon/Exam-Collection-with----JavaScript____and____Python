function goldMine(arg) {
  arg = arg.map(Number)
  let locations = arg.shift()

  while (locations--) {
    let [yields, days] = arg.splice(0,2)
    let goldPerDay = 0

    for (let j = 0; j < days; j++) goldPerDay += arg.shift()
      
    let averageGold = goldPerDay / days
    if (averageGold >= yields) {
      console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`)
    } else {
      let neededGold = (yields - averageGold).toFixed(2)
      console.log(`You need ${neededGold} gold.`)
    }
  }
}

//goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])
