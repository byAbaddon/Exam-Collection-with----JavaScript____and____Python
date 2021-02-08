function oscarsCeremony(rent) {
    rent = Number(rent) //Fucking Judge
    let statuettes = rent * 0.70
    let catering = statuettes / 100 * 85
    let sound = catering / 2
    let allSum = rent + statuettes + catering + sound

    return allSum.toFixed(2)
}

//console.log(oscarsCeremony(3500))