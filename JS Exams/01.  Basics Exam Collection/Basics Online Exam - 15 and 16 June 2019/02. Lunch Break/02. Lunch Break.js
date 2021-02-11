function lunchBreak(serialName, chapterTime, restTime) {
    let lunchTime = restTime * 1 / 8
    let otherRestTime = restTime * 1 / 4
    let timeLeft = restTime - lunchTime - otherRestTime
    let totalTime = chapterTime - timeLeft

    if (timeLeft >= chapterTime)
        return `You have enough time to watch ${serialName} and left with ${Math.ceil(Math.abs(totalTime))} minutes free time.`
    return `You don\'t have enough time to watch ${serialName}, you need ${Math.ceil(totalTime)} more minutes.`
}

// console.log(lunchBreak('Game of Thrones', 60, 96))
// console.log(lunchBreak('Teen Wolf', 48, 60))