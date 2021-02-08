function cinemaTickets(arg) {
    let countStandardTickets = 0
    let countStudentsTickets = 0
    let countKidsTickets = 0
    let moveName = arg.shift()

    while (moveName != 'Finish') {
        let freeSpace = arg.shift()
        let filledSpace = 0

        while (filledSpace < freeSpace) {
            ticket = arg.shift()
            if (ticket === 'standard') {
                filledSpace++
                countStandardTickets++
            } else if (ticket == 'student') {
                filledSpace++
                countStudentsTickets++
            } else if (ticket == 'kid') {
                filledSpace++
                countKidsTickets++
            } else if (ticket === 'End')
                break
        }

        let percentFull = filledSpace * 100 / freeSpace
        console.log(`${moveName} - ${percentFull.toFixed(2)}% full.`)
        moveName = arg.shift()
    }

    let totalTickets = countStudentsTickets + countStandardTickets + countKidsTickets
    let percentStudents = countStudentsTickets * 100 / totalTickets
    let percentStandard = countStandardTickets * 100 / totalTickets
    let percentKids = countKidsTickets * 100 / totalTickets

    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${percentStudents.toFixed(2)}% student tickets.`)
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`)
    console.log(`${percentKids.toFixed(2)}% kids tickets.`)
}


// cinemaTickets([
// 'Taxi',
// '10',
// 'standard',
// 'kid',
// 'student',
// 'student',
// 'standard',
// 'standard',
// 'End',
// 'Scary Movie',
// '6',
// 'student',
// 'student',
// 'student',
// 'student',
// 'student',
// 'student',
// 'Finish'])