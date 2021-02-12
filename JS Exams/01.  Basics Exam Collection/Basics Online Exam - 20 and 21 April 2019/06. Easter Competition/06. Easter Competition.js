function easterCompetition(arg) {

    let numberPlayers = arg.shift()
    let maxPoints = 0
    let winner = ''

    while (numberPlayers) {
        numberPlayers -= 1
        let currentPoints = 0
        let chefName = arg.shift()
        while (true) {
            let input = +arg.shift()

            if (isNaN(input)) {
                console.log(`${chefName} has ${currentPoints} points.`)
                break
            } else {
                currentPoints += +input
            }
        }

        if (maxPoints < currentPoints) {
            maxPoints = currentPoints
            winner = `${chefName} won competition with ${maxPoints} points!`
            console.log(`${chefName} is the new number 1!`)
        }
    }

    console.log(winner)
}

easterCompetition([2, 'Chef Angelov', 9, 9, 9, 'Stop', 'Chef Rowe', 10, 10, 10, 10, 'Stop'])