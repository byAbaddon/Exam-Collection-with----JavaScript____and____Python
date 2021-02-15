function vetParking(arg) {
const [days, hours] = [...arg.map(Number)]

    let currentTax = 0
    let totalTax = 0
    for (let day = 1; day <= days; day++) {
        for (let hour = 1; hour <= hours; hour++) {
            if ((day & 1) == 0 && hour & 1) {
                currentTax += 2.50
                totalTax += 2.50
            } else if (day & 1 && (hour & 1) == 0) {
                currentTax += 1.25
                totalTax += 1.25
            } else {
                currentTax++
                totalTax++
            }
        }

        console.log(`Day: ${day} - ${currentTax.toFixed(2)} leva`)
        currentTax = 0
    }

    console.log(`Total: ${totalTax.toFixed(2)} leva`)
}

//vetParking([2, 5])