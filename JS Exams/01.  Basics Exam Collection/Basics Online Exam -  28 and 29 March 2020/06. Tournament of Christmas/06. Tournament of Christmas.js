function tournamentOfChristmas(arg) {
   let days = arg.shift()
   let [winGames, lostGames, allMoney] = [0, 0, 0]
   
   while (days--) {
      let [win, lost] = [0, 0]
      while (true) {
         currentSport = arg.shift()
         if (currentSport === 'Finish') break
         arg.shift() === 'win' ? win += 20 : lost += 20
      }

      win > lost ? win *= 1.10 : win
      allMoney += win
      winGames += win
      lostGames += lost
   }

   if (winGames > lostGames)
      return `You won the tournament! Total raised money: ${(allMoney * 1.20).toFixed(2)}`
   return `You lost the tournament! Total raised money: ${allMoney.toFixed(2)}`
}


// console.log(tournamentOfChristmas([2,
//    'volleyball',
//    'win',
//    'football',
//    'lose',
//    'basketball',
//    'win',
//    'Finish',
//    'golf',
//    'win',
//    'tennis',
//    'win',
//    'badminton',
//    'win',
//    'Finish',
// ]))

// console.log(tournamentOfChristmas([
// 3,
// 'darts',
// 'lose',
// 'handball',
// 'lose',
// 'judo',
// 'win',
// 'Finish',
// 'snooker',
// 'lose',
// 'swimming',
// 'lose',
// 'squash',
// 'lose',
// 'table tennis',
// 'win',
// 'Finish',
// 'volleyball',
// 'win',
// 'basketball',
// 'win',
// 'Finish'
// ]))