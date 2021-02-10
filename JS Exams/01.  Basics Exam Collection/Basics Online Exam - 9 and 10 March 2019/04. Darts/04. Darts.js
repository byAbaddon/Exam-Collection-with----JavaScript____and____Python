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
