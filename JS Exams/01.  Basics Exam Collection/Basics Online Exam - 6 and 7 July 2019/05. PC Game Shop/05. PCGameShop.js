function pcGameShop(arg) {
  let gameCeils = +arg[0]

  let hearthstone = arg.filter(el => el === 'Hearthstone').length
  let fornite = arg.filter(el => el === 'Fornite').length
  let overwatch = arg.filter(el => el === 'Overwatch').length

  let firstGame = (hearthstone / gameCeils * 100).toFixed(2)
  let secondGame = (fornite / gameCeils * 100).toFixed(2)
  let threeGame = (overwatch / gameCeils * 100).toFixed(2)
  let allGameSum = Math.abs((+firstGame + +secondGame + +threeGame) - 100).toFixed(2)

  console.log(`Hearthstone - ${firstGame}%\nFornite - ${secondGame}%\nOverwatch - ${threeGame}%`);
  console.log(`Others - ${allGameSum}%`);
}

//pcGameShop(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike', 'oo'])  
//pcGameShop(['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2'])