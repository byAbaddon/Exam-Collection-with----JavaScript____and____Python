function tennisRanklist(arg) {
    let tournamentsNumber = Number(arg.shift())
    let startPoints = Number(arg.shift())

    const pointsDict = {'W': 2000,'F': 1200,'SF': 720}
    let finalPoints = startPoints
    let win = 0

    for (let i = 0; i < tournamentsNumber; i++) {
        let currentTournament = arg.shift()
        finalPoints += pointsDict[currentTournament]
        currentTournament === 'W'? win++ : null
    }

    let  averagePoints = (finalPoints - startPoints) / tournamentsNumber
    let  winPercent = win / tournamentsNumber * 100
    
    return `Final points: ${finalPoints}\nAverage points: ${~~averagePoints}\n${winPercent.toFixed(2)}%`
}

//console.log(tennisRanklist([5, 1400, 'F', 'SF', 'W', 'W', 'SF']))