function easterShop(...arg) {

    let allEggs = +arg.shift()
    let totalBoughtEggs = 0

    while (true) {
        command = arg.shift()
        if (command === 'Close')
            return `Store is closed!\n${totalBoughtEggs} eggs sold.`

        let eggsCount = +arg.shift()

        if (command === 'Buy') {
            if (allEggs >= eggsCount) {
                allEggs -= eggsCount
                totalBoughtEggs += eggsCount
            } else {
                return `Not enough eggs in store!\nYou can buy only ${allEggs}.`
            }
        } else if (command === 'Fill') {
            allEggs += eggsCount
        }
    }
}

//console.log(easterShop(13, 'Buy', 8, 'Fill', 3, 'Buy', 10))