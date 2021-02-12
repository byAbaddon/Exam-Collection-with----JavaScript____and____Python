function easterBake(arg) {

    let cakeNumbers = arg.shift()
    let flourPacket = 950
    let sugarPacket = 750
    let neededSugarPkg = 0
    let neededFlourPkg = 0
    let maxFlour = []
    let maxSugar = []

    for (let i = 0; i < cakeNumbers; i++) {
        maxSugar.push(+arg.shift())
        maxFlour.push(+arg.shift())
    }

    neededFlourPkg = Math.ceil(maxFlour.reduce((a, e) => a + e) / sugarPacket)
    neededSugarPkg = Math.ceil(maxSugar.reduce((a, e) => a + e) / flourPacket)

    console.log(`Sugar: ${neededSugarPkg}`)
    console.log(`Flour: ${neededFlourPkg}`)
    console.log(`Max used flour is ${Math.max(...maxFlour)} grams, max used sugar is ${Math.max(...maxSugar)} grams.`)
}

//easterBake([3, 400, 350, 250, 300, 450, 380])
