function club(arg) {
  let money = arg.shift()
  let [cocktailName, numberCocktail, sum, totalSum] = ['', 0, 0, 0]

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === 'Party!') {
      break;
    }
    cocktailName = arg[i]
    numberCocktail = arg[i + 1]
    let sum = cocktailName.length * numberCocktail
    sum.toString().slice(-1) % 2 !== 0 ? sum *= 0.75 : null
    totalSum += sum
    sum = 0
    i++
  }
  if (money > totalSum) {
    console.log(`We need ${Math.abs(money - totalSum).toFixed(2)} leva more.\nClub income - ${totalSum.toFixed(2)} leva.`);
  } else {
    console.log(`Target acquired.\nClub income - ${Math.abs(totalSum).toFixed(2)} leva.`);
  }
}

//club(['500', 'Bellini', '6', 'Bamboo', '7', 'Party!'])
//club(['100', 'Sidecar', '7', 'Mojito',  '5', 'White Russian', '10'])