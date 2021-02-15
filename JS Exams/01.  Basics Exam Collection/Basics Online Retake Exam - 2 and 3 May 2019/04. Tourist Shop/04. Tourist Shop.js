function touristShop(...arg) {
    let budget = +arg.shift()
    let spendMoney = 0
    let loop = 0

    for (let i = 1; i < arg.length; i += 2) {
      loop++
      loop % 3 === 0 ? spendMoney += +arg[i] / 2 :spendMoney += +arg[i]
    
      if (budget < spendMoney)
        return `You don't have enough money!\nYou need ${Math.abs(budget - spendMoney).toFixed(2)} leva!`

    } 

    return `You bought ${loop} products for ${spendMoney.toFixed(2)} leva.`
}

//console.log(touristShop(153.20, 'Backpack' , 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop'))