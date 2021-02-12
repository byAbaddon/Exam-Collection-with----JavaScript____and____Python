function easterEggsBattle(...arg) {

    let eggsOnePlayer = arg.shift()
    let eggsTwoPlayer = arg.shift()

    while (true) {
        current = arg.shift()
        if (current == 'End of battle')
            return `Player one has ${eggsOnePlayer} eggs left.\nPlayer two has ${eggsTwoPlayer} eggs left.`

        current === 'one' ? eggsTwoPlayer-- : eggsOnePlayer--

        if (eggsTwoPlayer === 0) {
            return `Player two is out of eggs. Player one has ${eggsOnePlayer} eggs left.`
        } else if (eggsOnePlayer == 0) {
            return `Player one is out of eggs. Player two has ${eggsTwoPlayer} eggs left.`
        }
    }
}

//console.log(easterEggsBattle(5, 4, 'one', 'two', 'one', 'two', 'two', 'End of battle'))