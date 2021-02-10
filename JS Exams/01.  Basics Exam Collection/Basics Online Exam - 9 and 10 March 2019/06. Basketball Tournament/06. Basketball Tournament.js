function basketballTournament(arg) {
    let [allGameCounter, win, lost] = [0, 0, 0]

    while (true) {
        let tournamentName = arg.shift()
        if (tournamentName == 'End of tournaments') break

        let currentGameCurrent = 0
        let gameNumbers = Number(arg.shift())

        allGameCounter += gameNumbers

        for (let i = 0; i < gameNumbers; i++) {
            currentGameCurrent++
            host = Number(arg.shift())
            guest = Number(arg.shift())

            if (host > guest) {
                win++
                console.log(`Game ${currentGameCurrent} of tournament ${tournamentName}: win with ${host - guest} points.`)
            } else {
                lost++
                console.log(`Game ${currentGameCurrent} of tournament ${tournamentName}: lost with ${guest - host} points.`)
            }
        }
    }
    console.log(`${(win / allGameCounter * 100).toFixed(2)}% matches win`)
    console.log(`${(lost / allGameCounter * 100).toFixed(2)}% matches lost`)
}

// basketballTournament([
//     'Dunkers',
//     '2',
//     '75',
//     '65',
//     '56',
//     '73',
//     'Fire Girls',
//     '3',
//     '67',
//     '34',
//     '83',
//     '98',
//     '66',
//     '45',
//     'End of tournaments'
// ])