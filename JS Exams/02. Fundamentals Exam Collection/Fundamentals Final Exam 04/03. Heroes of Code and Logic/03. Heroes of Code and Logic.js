function heroesOfCodeAndLogic(arr) {
  arr.pop()
  let countHeros = arr.shift()
  let herosObj = {}

  while (countHeros--) {
    const [name, hp, mp] = arr.shift().split(' ').map(el => isNaN(el) ? el : Number(el))
    herosObj[name] = {'hp': hp, 'mp': mp}
  }

  while (arr.length > 0) {
    let [command, name, arg1, arg2] = arr.shift().split(' - ').map(el => isNaN(el) ? el : Number(el))

    if (command == 'CastSpell') {
      let mpNeeded = arg1
      let spellName = arg2

      if (herosObj[name].mp - mpNeeded >= 0) {
        herosObj[name].mp -= mpNeeded
        console.log(`${name} has successfully cast ${spellName} and now has ${herosObj[name].mp} MP!`)
      } else {
        console.log(`${name} does not have enough MP to cast ${spellName}!`)
      }
    }
    
    if (command == 'TakeDamage') {
      let damage = arg1
      let attacker = arg2
     
      if (herosObj[name].hp - damage > 0) {
        herosObj[name].hp -= damage  
        console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${herosObj[name].hp} HP left!`)
         
      } else {
        delete herosObj[name]
        console.log(`${name} has been killed by ${attacker}!`)
      }
    }
    
    if (command == 'Recharge') {
      let amount = arg1
      
      if (herosObj[name].mp + amount > 200) {
        amount = 200 - herosObj[name].mp 
        herosObj[name].mp = 200
        console.log(`${name} recharged for ${amount} MP!`)
      } else {
        herosObj[name].mp += amount 
        console.log(`${name} recharged for ${amount} MP!`)
      }

    }
    
    if (command == 'Heal') {
      let health = arg1

      if (herosObj[name].hp + health > 100) {
        health = 100 - herosObj[name].hp
        herosObj[name].hp = 100
        console.log(`${name} healed for ${health} HP!`)
      } else {
        herosObj[name].hp += health
        console.log(`${name} healed for ${health} HP!`)
      }
    
    }
  }

  
let sortedObj = Object.entries(herosObj).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1].hp - a[1].hp)
  
  for (let key of sortedObj) 
    console.log(`${key[0]}\n  HP: ${key[1].hp}\n  MP: ${key[1].mp}`) 
}
  


// heroesOfCodeAndLogic([
// '2',
// 'Solmyr 85 120',
// 'Kyrre 99 50',
// 'Heal - Solmyr - 10',
// 'Recharge - Solmyr - 50',
// 'TakeDamage - Kyrre - 66 - Orc',
// 'CastSpell - Kyrre - 15 - ViewEarth',
// 'End',
// ])

// heroesOfCodeAndLogic([
// '4',
// 'Adela 90 150',
// 'SirMullich 70 40',
// 'Ivor 1 111',
// 'Tyris 94 61',
// 'Heal - SirMullich - 50',
// 'Recharge - Adela - 100',
// 'CastSpell - Tyris - 1000 - Fireball',
// 'TakeDamage - Tyris - 99 - Fireball',
// 'TakeDamage - Ivor - 3 - Mosquito',
// 'End',
//   ])