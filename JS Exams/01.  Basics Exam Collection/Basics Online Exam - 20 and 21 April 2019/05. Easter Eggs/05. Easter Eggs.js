function easterEggs(arg) {

    let loop = +arg.shift()
    let eggsDict = {'red': 0, 'orange': 0, 'blue': 0, 'green': 0}

    for (let i = 0; i < loop; i++) {
        color = arg.shift()
        eggsDict[color] += 1
    }

    console.log(`Red eggs: ${eggsDict["red"]}`)
    console.log(`Orange eggs: ${eggsDict["orange"]}`)
    console.log(`Blue eggs: ${eggsDict["blue"]}`)
    console.log(`Green eggs: ${eggsDict["green"]}`)

    const sortEggsDict = Object.entries(eggsDict).sort((a, b) => b[1] - a[1])
    console.log(`Max eggs: ${sortEggsDict[0][1]} -> ${sortEggsDict[0][0]}`)

}

//easterEggs([7, 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green'])