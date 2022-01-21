class SummerCamp {
  priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
  listOfParticipants = []
  constructor(organizer, location) {Object.assign(this, { organizer, location })}

  registerParticipant(name, condition, money) {
    if (!this.priceForTheCamp[condition]) throw new Error('Unsuccessful registration at the camp.')
    if (this.listOfParticipants.find(x => x.name == name)) return `The ${name} is already registered at the camp.`
    if (money < this.priceForTheCamp[condition]) return `The money is not enough to pay the stay at the camp.`
    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })  
    return `The ${name} was successfully registered.`
  }

  unregisterParticipant(name) {   
    if (!this.listOfParticipants.find(x => x.name == name)) throw new Error(`The ${name} is not registered in the camp.`)   
     this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name)
     return `The ${name} removed successfully.`
  }

  timeToPlay(typeOfGame, participant1, participant2) {
     let playerOne = this.listOfParticipants.find(x => x.name == participant1)
     let playerTwo = this.listOfParticipants.find(x => x.name == participant2)
    
     if (!playerOne) throw new Error(`Invalid entered name/s.`)

    if (typeOfGame == 'Battleship') {    
       playerOne.power += 20
      return `The ${playerOne.name} successfully completed the game ${typeOfGame}.`
    } else {  //(playerOne && playerTwo)
     if (!playerTwo) throw new Error(`Invalid entered name/s.`)
     if (playerOne.condition != playerTwo.condition) throw new Error('Choose players with equal condition.')
     
      if (playerOne.power > playerTwo.power) {
        playerOne.wins += 1
        return `The ${playerOne.name} is winner in the game ${typeOfGame}.`
      } else if (playerOne.power < playerTwo.power) {
        playerTwo.wins += 1
        return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`
      }
      return 'There is no winner.'
     }
  }

  toString() {
    let result = []
    result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
    let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
    sorted.forEach(el => result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`))
    return result.join('\n')
  }

}



//1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

//2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

//3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

//4
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());


/* 
//1
The money is not enough to pay the stay at the camp.
The Petar Petarson was successfully registered.
The Petar Petarson is already registered at the camp.
Uncaught Error: Unsuccessful registration at the camp.

//2
The Petar Petarson was successfully registered.
Uncaught Error: The Petar is not registered in the camp.
The Petar Petarson removed successfully.

//3
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.

//4
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.

Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
Petar Petarson - student - 120 - 1
Sara Dickinson - child - 100 - 0
Dimitur Kostov - student - 100 - 0
*/