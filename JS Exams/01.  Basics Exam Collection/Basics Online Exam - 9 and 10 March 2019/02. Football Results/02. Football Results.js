function footballResults(...arg) {
    let [win, lost, equal] = [0, 0, 0]

    for (let i = 0; i < 3; i++) {
        let [host, guest] = arg[i].split(':')
        host > guest ? win++ : host < guest ? lost++ : equal++
    }

    return `Team won ${win} games.\nTeam lost ${lost} games.\nDrawn games: ${equal}`
}

//console.log(footballResults('3:1', '0:2', '0:0'))