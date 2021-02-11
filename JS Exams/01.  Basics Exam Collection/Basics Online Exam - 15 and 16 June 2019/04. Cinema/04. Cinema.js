function cinema(...arg) {
    let hallPlaces = +arg.shift()
    let allTicketPrice = 0
    let seats = 0

    while (true) {
        let currentPlaces = +arg.shift()

        if (isNaN(currentPlaces)) {
            break
        }

        seats += currentPlaces
        if (seats <= hallPlaces) {
            if (currentPlaces % 3 == 0) {
                currentPlaces--
            }

            allTicketPrice += currentPlaces * 5
        } 
    }

    if (hallPlaces < seats)
        return `The cinema is full.\nCinema income - ${allTicketPrice} lv.`
    return `There are ${hallPlaces - seats} seats left in the cinema.\nCinema income - ${allTicketPrice} lv.`
}

// console.log(cinema(60, 10, 6, 3, 20, 15, 'Movie time!'))
// console.log(cinema(50, 15, 10, 10, 15, 5))