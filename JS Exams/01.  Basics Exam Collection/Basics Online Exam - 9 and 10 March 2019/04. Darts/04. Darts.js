function darts(args) {
  let name = args.shift()
  let startPoints = 301
  let shots = incorrectShots = 0

  while (startPoints > 0) {
    let [com, pts] = args.splice(0, 2)

    if (com == 'Retire') return `${name} retired after ${incorrectShots} unsuccessful shots.`
    com == 'Double' ? pts *= 2 :
    com == 'Triple' ? pts *= 3 : null
    
    if (startPoints >= pts) {
      shots++
      startPoints -= pts
    } else incorrectShots++
  }
  return `${name} won the leg with ${shots} shots.`
}



//------------------------------------------------------------(2)-----------------------------------



function darts(...arg) {
    let correctShots = 0
    let incorrectShots = 0
    let points = 301

    let playerName = arg.shift()
    let field = arg.shift()
    let currentPoints = Number(arg.shift())

    while (true) {
        correctShots++
        if (field == 'Triple') {
            currentPoints *= 3
        } else if (field == 'Double') {
            currentPoints *= 2
        }

        if (points >= currentPoints) {
            points -= currentPoints
        } else {
            correctShots -= 1
            incorrectShots += 1
        }

        if (points == 0) {
            break
        } else {
            field = arg.shift()
        }

        if (field == 'Retire') break

        currentPoints = Number(arg.shift())
    }

    if (points == 0)
        return `${playerName} won the leg with ${correctShots} shots.`
    return `${playerName} retired after ${incorrectShots} unsuccessful shots.`
}

// console.log(darts(
//     'Michael van Gerwen',
//     'Triple',
//     '20',
//     'Triple',
//     '19',
//     'Double',
//     '10',
//     'Single',
//     '3',
//     'Single',
//     '1',
//     'Triple',
//     '20',
//     'Triple',
//     '20',
//     'Double',
//     '20'
// ))
