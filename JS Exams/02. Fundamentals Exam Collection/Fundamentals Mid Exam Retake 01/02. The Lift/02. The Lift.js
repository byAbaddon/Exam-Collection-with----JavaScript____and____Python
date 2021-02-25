function theLift(arr) {
  let people = +arr.shift()
  let wagons = arr.shift().split(' ').map(Number)

  for (let i = 0; i < wagons.length; i++) {
    let currentPassengers = Math.min(4 - wagons[i], people)
    wagons[i] += currentPassengers
    people -= currentPassengers
  }

  if (people > 0)
    console.log(`There isn't enough space! ${people} people in a queue!`)
  else if (wagons.filter(el => el < 4).length > 0)
    console.log(`The lift has empty spots!`)

  console.log(`${wagons.join(' ')}`)
}


// theLift(['20', '0 2 0'])
// theLift(['15', '0 0 0 0 0'])