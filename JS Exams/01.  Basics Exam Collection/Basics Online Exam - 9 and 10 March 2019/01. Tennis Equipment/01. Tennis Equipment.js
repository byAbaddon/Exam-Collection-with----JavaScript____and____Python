function tennisEquipment(...arg) {
    let [priceOneRocket, rocketCount, sneakersCount] = [...arg.map(Number)]

    let allRocketPrice = priceOneRocket * rocketCount
    let oneSneakersPrice = priceOneRocket / 6
    let allSneakersPrice = sneakersCount * oneSneakersPrice
    let otherEquipment = (allRocketPrice + allSneakersPrice) * 0.20
    let totalPrice = allRocketPrice + allSneakersPrice + otherEquipment

    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`)
    console.log(`Price to be paid by sponsors ${(Math.ceil(totalPrice * 7 / 8))}`)
}

//tennisEquipment(850, 4, 2)