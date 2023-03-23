function bestPlayer(arg) {
  let name = goals = null
  for (i = 0; i < arg.length; i+= 2) 
    if (goals < +arg[i + 1])
      [name, goals] = [arg[i], +arg[i + 1]] 
  console.log(name, 'is the best player!', `\nHe has scored ${goals} ${goals < 3 ? 'goals.' : 'goals and made a hat-trick !!!'}`)
}

//-----------------------------------------------(2)------------------------------------------

function bestPlayer(arr) {
    const playersObj = {}

    while (true) {
        let name = arr.shift()
        if (name == 'END') break
        let goals = arr.shift()

        playersObj[name] = goals
        if (playersObj[name] >= 10) break

    }

    let sortByGoals = Object.entries(playersObj).sort((a, b) => b[1] - a[1])
    let best_player = sortByGoals[0][0]
    let goals = playersObj[best_player]

    console.log(`${best_player} is the best player!`)
    if (goals < 3) console.log(`He has scored ${goals} goals.`)
    else console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
}

// bestPlayer((["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]))
