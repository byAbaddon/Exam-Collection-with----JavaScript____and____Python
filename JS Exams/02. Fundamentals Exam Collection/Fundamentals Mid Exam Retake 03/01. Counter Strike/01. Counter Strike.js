function counterStrike(arr) {
  let energy = +arr.shift()
  let countWon = 0

  while (arr.length > 0) {
    let enemy = +arr.shift()

    if (isNaN(enemy)) break
    if (energy < enemy) return `Not enough energy! Game ends with ${countWon} won battles and ${energy} energy`

    energy -= enemy
    countWon++

    if (countWon % 3 == 0) energy += countWon
  }

  return `Won battles: ${countWon}. Energy left: ${energy}`
}

// console.log(counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']))
// console.log(counterStrike(['200', '54', '14', '28', '13', 'End of battle']))

//---------------------------------------------------------(2)------------------------------
function counterStrike(arr) {
  arr = arr.map(el => isNaN(el) ? el : Number(el))
  let energy = +arr.shift()
  let countWon = 0

  while (arr.length > 0) {
    let enemy = arr.shift()

    if (typeof (enemy) != 'number')
      break

    if (energy < enemy || arr.length == 0)
      return `Not enough energy! Game ends with ${countWon} won battles and ${energy} energy`

    energy -= enemy
    countWon++

    if (countWon % 3 == 0)
      energy += countWon
  }

  return `Won battles: ${countWon}. Energy left: ${energy}`
}

// console.log(counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']))
// console.log(counterStrike(['200', '54', '14', '28', '13', 'End of battle']))