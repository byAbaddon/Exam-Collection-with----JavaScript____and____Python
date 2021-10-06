function balls(arg) {
    arg.shift()
    let pts = 0
    const ballsObj = { 'red': 5, 'orange': 10, 'yellow': 15, 'white': 20, 'black': () => pts /= 2 }

    const statisticsObj = {'red': 0,'orange': 0,'yellow': 0,'white': 0,'Other colors picked': 0,'Divides from black balls': 0}

    for (const ball of arg) {
        if (ballsObj[ball]) {
             if (ball == 'black') {
                ballsObj[ball]()
                statisticsObj['Divides from black balls'] += 1
             } else {
                 pts += ballsObj[ball]
                statisticsObj[ball] += 1
            }
        
        } else {
            statisticsObj['Other colors picked'] += 1
         }
            
    }

    console.log('Total points:', Math.floor(pts))
    for (const [key, val] of Object.entries(statisticsObj)) {
        console.log(key.length < 10 ? `Points from ${key} balls: ${val}` : `${key}: ${val}`)
    }
}

// balls(["3", "white", "black", "pink"])
// balls(["5", "red", "red", "ddd", "ddd", "sss"])