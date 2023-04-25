function club(arg, sum=0, totalSum=0) {
  arg.includes('Party!') ? arg.pop() : null
  let money = arg.shift()

  for (let i = 0; i < arg.length; i+= 2) {
    sum = arg[i].length * arg[i+1]
    totalSum += sum % 10 & 1 ? sum * 0.75 : sum
  }

  let income =`\nClub income - ${totalSum.toFixed(2)} leva.`
  if (money > totalSum) return `We need ${(money - totalSum).toFixed(2)} leva more.${income}`
  return `Target acquired.${income}`
}

//---------------------------------------------------------------------(2)--------------------

function club(arg, sum = 0, totalSum = 0) {
  let money = arg.shift()

  for (let i = 0; i < arg.length; i += 2) {
    if (arg[i] == "Party!") break
    sum = arg[i].length * arg[i+1]
    totalSum += sum % 10 & 1 ? sum * 0.75 : sum
  }

  if (money > totalSum) {
    console.log(`We need ${(money - totalSum).toFixed(2)} leva more.\nClub income - ${totalSum.toFixed(2)} leva.`);
  } else {
    console.log(`Target acquired.\nClub income - ${totalSum.toFixed(2)} leva.`);
  }
}


//--------------------------------------------------------------------(3)----------------------

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
