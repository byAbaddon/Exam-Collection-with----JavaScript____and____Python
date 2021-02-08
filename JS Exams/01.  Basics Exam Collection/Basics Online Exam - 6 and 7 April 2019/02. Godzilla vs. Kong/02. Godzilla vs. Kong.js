function godzillaVsKong(...arg) {
    let [budget, statist, clothes] = [...arg]

    let decorSum = budget * 0.10
    if (statist > 150) {
        clothesSum = statist * clothes * 0.90
    } else {
        clothesSum = statist * clothes
    }

    let subtotalSum = decorSum + clothesSum

    if (budget >= subtotalSum)
        return `Action!\nWingard starts filming with ${(budget - subtotalSum).toFixed(2)} leva left.`
    return `Not enough money!\nWingard needs ${(subtotalSum - budget).toFixed(2)} leva more.`
}

//console.log(godzillaVsKong(20000, 120, 55.5));