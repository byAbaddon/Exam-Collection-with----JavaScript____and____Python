function seriesCalculator(serialName, seasonsCount, chaptersCount, timeForSerial) {
    let adTime = +timeForSerial * 0.20
    let allChapterTime = +timeForSerial + adTime
    let bonusTime = +seasonsCount * 10
    let totalTime = allChapterTime * +chaptersCount * +seasonsCount + bonusTime

    return `Total time needed to watch the ${serialName} series is ${totalTime.toFixed(0)} minutes.`
}

//console.log(seriesCalculator('Lucifer', 3, 18, 55))