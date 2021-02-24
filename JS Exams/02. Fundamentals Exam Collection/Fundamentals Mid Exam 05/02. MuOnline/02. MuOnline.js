function muOnline(str) {
    let health = 100
    let bitcoins = 0
    let countRooms = 0

    for (const el of str.split('|')) {
        countRooms += 1
        let [command, pts] = el.split(' ').map(el => isNaN(el) ? el : Number(el))

        if (command == 'potion') {
            if (health + pts > 100) {
                console.log(`You healed for ${100 - health} hp.`)
                health = 100
            } else {
                console.log(`You healed for ${pts} hp.`)
                health += pts
            }
            console.log(`Current health: ${health} hp.`)
        } else if (command == 'chest') {
            console.log(`You found ${pts} bitcoins.`)
            bitcoins += pts
        } else {
            health -= pts
            if (health > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${countRooms}`)
                return
            }
        }
    }

    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`)
}


//muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
//muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')