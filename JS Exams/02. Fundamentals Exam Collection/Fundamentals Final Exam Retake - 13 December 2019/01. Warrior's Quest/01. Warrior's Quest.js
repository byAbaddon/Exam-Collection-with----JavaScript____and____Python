function warriorsQuest(inputArr) {
  let arr = [...inputArr]
  let rmLastElement = arr.pop()
  let skill = arr.shift()

  class Warrior {
    constructor(skill) {
      this.skill = skill
    }

    gladiatorstance() {
      this.skill = this.skill.toUpperCase()
      return this.skill
    }

    defensivestance() {
      this.skill = this.skill.toLowerCase()
      return this.skill
    }

    dispel(index, letter) {
      let isValidIndex = this.skill[+index]
      if (isValidIndex !== undefined) {
        this.skill = this.skill.replace(isValidIndex, letter)
        return 'Success!'
      } else {
        return 'Dispel too weak.'
      }
    }

    change(sub, secondSub) {
      let findSub = this.skill.indexOf(sub)
        if (findSub !== -1) {
          this.skill = this.skill.replace(sub, secondSub)
          this.skill = this.skill.replace(sub, secondSub)
        return this.skill
      }
    }

    remove(sub) {
      this.skill = this.skill.replace(sub, '')
      return this.skill
    }
  }


  let war = new Warrior(skill)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('Target')) {
      arr[i] = arr[i].substring(7, )
    }
    let [command, index, char] = arr[i].split(' ')
    let listCommand = ["GladiatorStance", "DefensiveStance", "Dispel", "Change", "Remove"]
    if (!listCommand.includes(command)) {
      console.log("Command doesn't exist!");
      continue
    }
    command = command.toLowerCase()

    console.log(war[command](index, char))
  }

}

// warriorsQuest([
//   'fr1c710n',
//   'GladiatorStance',
//   'Dispel 2 I',
//   'Dispel 4 T',
//   'Dispel 6 O',
//   'Dispel 5 I',
//   'Dispel 10 I',
//   'Target Change RICTION riction',
//   'For Azeroth',
// ])



// warriorsQuest([
//   'DYN4MICNIC',
//   'Target Remove NIC',
//   'Dispel 3 A',
//   'DefensiveStance',
//   'Target Change d D',
//   'target change D d',
//   'For Azeroth'
// ])

