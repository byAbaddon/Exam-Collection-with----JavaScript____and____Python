function christmasGifts(arg) {
  arg.pop()
  let adults = kids = toysMoney = sweatersMoney = 0

  while (arg.length) {
    let age = arg.shift()

    if (age <= 16) {
      kids++
      toysMoney += 5
    } else 
      adults++
      sweatersMoney += 15
  }

  console.log(`Number of adults: ${adults}`)
  console.log(`Number of kids: ${kids}`)
  console.log(`Money for toys: ${toysMoney}`)
  console.log(`Money for sweaters: ${sweatersMoney}`)

}

//christmasGifts(["16", "20", "46", "12", "8", "20", "49", "Christmas"])
