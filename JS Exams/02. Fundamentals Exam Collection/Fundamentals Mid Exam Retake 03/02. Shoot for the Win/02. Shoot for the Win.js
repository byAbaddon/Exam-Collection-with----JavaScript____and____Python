function shootForTheWin(arr) {
  arr.pop()
  let targets = arr.shift().split(' ').map(Number)
  let countShots = 0

  while (arr.length > 0) {
    let shotIndex = +arr.shift()

    if (targets[shotIndex] > -1 && shotIndex >= 0 && shotIndex < targets.length) {
      let target = targets[shotIndex]
      targets[shotIndex] = -1
      countShots++

      for (let i = 0; i < targets.length; i++) {
        if (targets[i] > -1 && targets[i] > target) {
          targets[i] = targets[i] - target
        } else if (targets[i] > -1) {
          targets[i] += target
        }
      }
    }
  }

  return `Shot targets: ${countShots} -> ${targets.join(' ')}`
}

// console.log(shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']))
// console.log(shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']))