function easterBakery(mealPrice, mealKg, sugarKg, egsPackets, yeastPackets) {
    let sugarPrice = mealPrice * 0.75
    let egsPrice = mealPrice * 1.10
    let yeastPrice = sugarPrice * 0.20

    mealPrice *= mealKg
    sugarPrice *= sugarKg
    egsPrice *= egsPackets
    yeastPrice *= yeastPackets
    let totalSum = mealPrice + sugarPrice + egsPrice + yeastPrice

    return totalSum.toFixed(2)
}

//console.log(easterBakery(50, 10, 3.5, 6, 1))