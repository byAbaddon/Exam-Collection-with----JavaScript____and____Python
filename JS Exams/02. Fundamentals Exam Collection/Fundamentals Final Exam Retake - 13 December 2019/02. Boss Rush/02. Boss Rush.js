function bossRush(inputArr) {
  let arr = [...inputArr]

  for (let i = 1; i < arr.length; i++) {
    let pattern = /\|(?<BossName>[A-Z]{4,})\|:#(?<name>[A-z]+\s{1}[A-z]+)#/g
    let result = [...arr[i].matchAll(pattern)][0]

    if (result === undefined) {
      console.log('Access denied!');
    } else {
      let boss = result.groups.BossName
      let name = result.groups.name
      console.log(boss + ', The ' + name);
      console.log(`>> Strength: ${boss.length}\n>> Armour: ${name.length}`);
    }
  }
}

// bossRush([
//   3,
//   '|PETER|:#H1gh Overseer#  ',
//   '|IVAN|:#Master detective#',
//   '|KARL|: #Marketing lead#',

// ])

// bossRush([
//   3,
//   '|GEORGI|:#Lead architect#',
//   '|Hristo|:#High Overseer#',
//   '|STEFAN|:#Assistant Game Developer#'
// ])