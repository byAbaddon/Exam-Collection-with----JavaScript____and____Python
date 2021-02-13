function catWalking(minutes, dayWalk, calories) {
    let allWalk = minutes * dayWalk
    let burnetCalories = allWalk * 5

    if (calories / 2 <= burnetCalories)
        return `Yes, the walk for your cat is enough. Burned calories per day: ${burnetCalories}.`
    return `No, the walk for your cat is not enough. Burned calories per day: ${burnetCalories}.`
}

//console.log(catWalking(30, 3, 600))