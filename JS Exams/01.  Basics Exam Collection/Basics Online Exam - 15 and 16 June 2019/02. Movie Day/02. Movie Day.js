function movieDay(pictureTime, countChapters, cadTime) {
    let preparation = pictureTime * 0.15
    let operatorsTime = countChapters * cadTime
    let neededTime = preparation + operatorsTime
    let total = Math.round(Math.abs(neededTime - pictureTime))

    if (neededTime <= pictureTime)
        return `You managed to finish the movie on time! You have ${total} minutes left!`
    return `Time is up! To complete the movie you need ${total} minutes.`
}

// console.log(movieDay(120, 10, 11))