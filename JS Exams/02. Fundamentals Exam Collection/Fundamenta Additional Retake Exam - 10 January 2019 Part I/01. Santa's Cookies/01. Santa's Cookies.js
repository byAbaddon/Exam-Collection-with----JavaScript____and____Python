function santasCookies(arr) {
  const cookeObj = {'singleCookieGrams': 25,'cup': 140,'smallSpoon': 10,'bigSpoon': 20,'cookiesPerBox': 5}
  arr = arr.map(Number)
  let amount = arr.shift()
  let totalBoxes = 0

  while (amount--) {
    let flourCups = Math.floor(arr.shift() / cookeObj.cup)
    let sugarSpoons = Math.floor(arr.shift() / cookeObj.bigSpoon)
    let cocoaSpoons = Math.floor(arr.shift() / cookeObj.smallSpoon)

    if ((flourCups && sugarSpoons && cocoaSpoons) <= 0) {
      console.log('Ingredients are not enough for a box of cookies.')
      continue
    } else {
      let totalCookies = (cookeObj.cup + cookeObj.smallSpoon + cookeObj.bigSpoon) *
        Math.min(flourCups, sugarSpoons, cocoaSpoons) / cookeObj.singleCookieGrams

      let boxesPerBatch = Math.floor(totalCookies / cookeObj.cookiesPerBox)
      totalBoxes += boxesPerBatch

      console.log(`Boxes of cookies: ${boxesPerBatch}`)
    }
  }
  console.log(`Total boxes: ${totalBoxes}`)

}


// santasCookies(['2', '200', '300', '500', '100', '200', '50', ])
// santasCookies(['1', '1400', '200', '100'])