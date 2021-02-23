function heartDelivery(arr) {
  let neighborhood = arr.shift().split('@').map(Number)
  let house = 0

  while (true) {
    token = arr.shift().split(' ')
    if (token.length == 1) break

    house += +token.slice(-1)
    house > neighborhood.length - 1 ? house = 0 : null
    neighborhood[house] -= 2

    if (neighborhood[house] === 0)
      console.log(`Place ${house} has Valentine's day.`)
    else if (neighborhood[house] < 0)
      console.log(`Place ${house} already had Valentine's day.`)
  }

  console.log(`Cupid's last position was ${house}.`)
  let failedHouses = neighborhood.filter(el => el > 0).length
  console.log(failedHouses <= 0 ? 'Mission was successful.' : `Cupid has failed ${failedHouses} places.`);
}


// heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!', ])