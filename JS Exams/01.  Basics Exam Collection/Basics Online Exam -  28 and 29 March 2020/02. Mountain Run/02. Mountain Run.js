function mountainRun(record, mt, sec) {
    let seconds = mt * sec
    let add_sec = ~~(mt / 50) * 30
    let subtotal = seconds + add_sec
    let time = subtotal - record

    if (time > subtotal || record > subtotal)
        return `Yes! The new record is ${subtotal.toFixed(2)} seconds.`
    return `No! He was ${time.toFixed(2)} seconds slower.`
}

//console.log(mountainRun(10164, 1400, 25))