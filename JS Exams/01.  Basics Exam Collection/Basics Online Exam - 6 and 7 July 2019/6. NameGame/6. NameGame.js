function nameGame(arg) {
  let bigPoints = 0
  let winnerName = ''

  while (true) {
    let addPoints = 0
    let playerName = arg.shift()
    if (playerName === 'Stop') {
      console.log(`The winner is ${winnerName} with ${bigPoints} points!`);
      break
    }
    for (let i = 0; i < playerName.length; i++) {
      let currentLetter = playerName[i]
      let currentPoints = +arg.shift()

      if (currentLetter.charCodeAt(0) === currentPoints) {
        addPoints += 10
      } else {
        addPoints += 2
      }

      if (bigPoints <= addPoints) {
        bigPoints = addPoints
        winnerName = playerName
      }

    }
  }

}

nameGame(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop'])
nameGame(['Pesho', '124', '34', '111', '97', '99', 'Gosho', '98', '124', '88', '76', '18', 'Stop'])


//-----------------------------------------------------(2)--------------------------------
// function nameGame(arg) {
//   let allPoints = 0
//   let ranking = {}
//   let playersGroup = arg.join(' ').match(/\b\w+(\s+\d+)+\b/gim)

//   while (playersGroup.length > 0) {

//     let name = playersGroup[0].split(' ')[0]
//     let points = playersGroup[0].split(' ').filter(el => Number(el))

//     for (let i = 0; i < points.length; i++) {
//       name[i].charCodeAt(0) === +points[i] ? allPoints += 10 : allPoints += 2
//     }
//     ranking[name] = allPoints
//     allPoints = 0
//     playersGroup.shift()

//   }
//   const keyByBigValue = Object.keys(ranking).reduce((a, b) => ranking[a] > ranking[b] ? a : b)
//   console.log(`The winner is ${keyByBigValue} with ${ranking[keyByBigValue]} points!`);
// }

// Attention 90pt. One run Time error !
//nameGame(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop'])
//nameGame(['Pesho', '124', '34', '111', '97', '99', 'Gosho', '98', '124', '88', '76', '18', 'Stop'])