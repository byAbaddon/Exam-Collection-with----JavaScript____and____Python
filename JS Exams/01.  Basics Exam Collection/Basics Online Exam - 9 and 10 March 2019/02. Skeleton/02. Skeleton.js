function skeleton(...arg) {
    let [controlMin, controlSec, mLong, secPerMeters] = [...arg.map(Number)]

    let controlTime = controlMin * 60 + controlSec
    let timeDecrease = mLong / 120
    let totalDecreaseTime = timeDecrease * 2.5
    let playerTime = mLong / 100 * secPerMeters - totalDecreaseTime

    if (playerTime <= controlTime)
        return `Marin Bangiev won an Olympic quota!\nHis time is ${playerTime.toFixed(3)}.`
    return `No, Marin failed! He was ${(playerTime - controlTime).toFixed(3)} second slower.`
}

//console.log(skeleton(2, 12, 1200, 10))