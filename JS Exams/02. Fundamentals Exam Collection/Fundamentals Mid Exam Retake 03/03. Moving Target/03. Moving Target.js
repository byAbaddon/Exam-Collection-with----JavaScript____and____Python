function movingTarget(arr) {
  arr.pop()
  let targets = arr.shift().split(' ').map(Number)

  while (arr.length > 0) {
    const [command, index, power] = arr.shift().split(' ').map(el => Number(el) || el)

    if (command === 'Shoot') {
      if (index >= 0 && index < targets.length)
        targets[index] = targets[index] - power
      if (targets[index] <= 0)
        targets.splice(index, 1)
    }

    if (command == 'Strike') {
      let radius = power
      if (index + radius < targets.length && index - radius >= 0)
        targets.splice(index - radius, radius * 2 + 1)
      else
        console.log('Strike missed!')
    }

    if (command === 'Add') {
      if (index >= 0 && index < targets.length)
        targets.splice(index, 0, power)
      else
        console.log('Invalid placement!')
    }
  }

  console.log(targets.join('|'))
}

//movingTarget(['52 74 23 44 96 110', 'Shoot 5 10', 'Shoot 1 80', 'Strike 2 1', 'Add 22 3', 'End'])
// movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End', ])