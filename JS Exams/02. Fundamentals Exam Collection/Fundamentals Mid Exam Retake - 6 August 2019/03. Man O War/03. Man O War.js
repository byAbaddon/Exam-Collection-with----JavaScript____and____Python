function manOWar(input) {
  input.pop()
  let pirateShip = input.shift().split('>').map(Number)
  let warShip = input.shift().split('>').map(Number)
  let healthStatus = +input.shift()

  while (input.length > 0) {
    let [command, index, lastIndex, damage] = input.shift().split(' ').map(el => isNaN(el) ? el : Number(el))

    if (command == 'Fire' && warShip[index]) {
      warShip[index] -= lastIndex
      if (warShip[index] <= 0) return 'You won! The enemy ship has sunken.'
    }

    if (command == 'Defend' && pirateShip[index] && pirateShip[lastIndex]) {
      pirateShip = pirateShip.map((el, i) => i >= index && i <= lastIndex ? el - damage : el)
      if (pirateShip.some(el => el <= 0)) return 'You lost! The pirate ship has sunken.'
    }

    if (command == 'Repair' && pirateShip[index]) {
      pirateShip[index] += lastIndex
      pirateShip[index] > healthStatus ? pirateShip[index] = healthStatus : null
    }

    if (command == 'Status') {
      let status = pirateShip.filter(el => el < healthStatus * 0.20).length
      console.log(status, 'sections need repair.')
    }
  }

  return `Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}\nWarship status: ${warShip.reduce((a, b) => a + b)}`
}

// console.log(manOWar([
//   '12>13>11>20>66',
//   '12>22>33>44>55>32>18',
//   '70',
//   'Fire 2 11',
//   'Fire 8 100',
//   'Defend 3 6 11',
//   'Defend 0 3 5',
//   'Repair 1 33',
//   'Status',
//   'Retire',
// ]))

// console.log(manOWar([
//   '2>3>4>5>2',
//   '6>7>8>9>10>11',
//   '20',
//   'Status',
//   'Fire 2 3',
//   'Defend 0 4 11',
//   'Repair 3 18',
//   'Retire',
// ]))