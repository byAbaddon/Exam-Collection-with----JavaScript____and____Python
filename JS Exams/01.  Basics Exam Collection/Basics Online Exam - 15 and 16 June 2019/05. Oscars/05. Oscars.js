function oscars(arg) {
    let artistName = arg.shift()
    let artistPoints = +arg.shift()
    let juryCount = +arg.shift()
    let neededPoint = 1250.5

    for (let i = 0; i < juryCount; i++) {
        let juryName = arg.shift()
        let juryPoint = +arg.shift()
        artistPoints += juryName.length * juryPoint / 2
        if (artistPoints >= neededPoint)
            break
    }

    if (artistPoints > neededPoint)
        return `Congratulations, ${artistName} got a nominee for leading role with ${artistPoints.toFixed(1)}!`
    return `Sorry, ${artistName} you need ${(neededPoint - artistPoints).toFixed(1)} more!`
}

// console.log(oscars([
//     'Sandra Bullock',
//     '340',
//     '5',
//     'Robert De Niro',
//     '50',
//     'Julia Roberts',
//     '40.5',
//     'Daniel Day-Lewis',
//     '39.4',
//     'Nicolas Cage',
//     '29.9',
//     'Stoyanka Mutafova',
//     '33',

// ]))