function gameNumberWars(...arg) {

    let name_player_one = arg.shift()
    let name_player_two = arg.shift()
    let points_player_one = 0
    let points_player_two = 0

    while (true) {

        card_player_one = Number(arg.shift())
        if (isNaN(card_player_one)) {

            console.log(`${name_player_one} has ${points_player_one} points`)
            console.log(`${name_player_two} has ${points_player_two} points`)
            break
        }

        let card_player_two = Number(arg.shift())

        if (card_player_one > card_player_two) {
            points_player_one += card_player_one - card_player_two
        } else if (card_player_one < card_player_two) {
            points_player_two += card_player_two - card_player_one
        } else {
            console.log('Number wars!')


            card_player_one = Number(arg.shift())
            card_player_two = Number(arg.shift())

            if (card_player_one > card_player_two) {
                console.log(`${name_player_one} is winner with ${points_player_one} points`)
            } else {
                console.log(`${name_player_two} is winner with ${points_player_two} points`)
            }

            break
        }
    }

}

//gameNumberWars('Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3')
//gameNumberWars('Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game')