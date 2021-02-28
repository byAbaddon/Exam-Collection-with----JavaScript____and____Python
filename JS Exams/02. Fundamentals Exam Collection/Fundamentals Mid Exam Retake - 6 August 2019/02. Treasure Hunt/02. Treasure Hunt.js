function treasureHunt(input) {
  input.pop()
  let items = input.shift().split('|')

  while (input.length > 0) {
    const [command, ...n] = input.shift().split(' ')
    if (command == 'Loot') for (const el of n)  if (!items.includes(el)) items.unshift(el)    
    if (command == 'Drop') items[n[0]] ? (takeEl = items.splice(n[0], 1), items.push(takeEl[0])) : null
    if (command == 'Steal') console.log(items.splice(-Number(n[0]), ).join(', '))
  }

  try {sum = items.map(el => el.length).reduce((a, b) => a + b) / items.length
    return `Average treasure gain: ${sum.toFixed(2)} pirate credits.`
  } catch { return 'Failed treasure hunt.' }
}


// console.log(treasureHunt([
//   'Diamonds|Silver|Shotgun|Gold',
//   'Loot Silver Medals Coal',
//   'Drop -1',
//   'Drop 1',
//   'Steal 6',
//   'Yohoho!',
// ]))


//-------------------------------------------------(2)------------------------------------------------


function treasureHunt(input) {
  input.pop()
  let items = input.shift().split('|')

  while (input.length > 0) {
    const [command, ...n] = input.shift().split(' ')
    if (command == 'Loot') 
      for (const el of n)  if (!items.includes(el)) items.unshift(el)   

    if (command == 'Drop') {
      let index = +n[0]
      if (items[index]) {
        takeEl = items.splice(index, 1)
        items.push(takeEl[0])
      }
    }

    if (command == 'Steal') {
      let index = +n[0]
      console.log( items.splice(-index, Infinity).join(', '))
    }
  }

  try {
    let sum = items.map(el => el.length).reduce((a, b) => a + b) / items.length
    return `Average treasure gain: ${sum.toFixed(2)} pirate credits.`
  } catch {
    return 'Failed treasure hunt.'
  }
}

// console.log(treasureHunt([
//   'Gold|Silver|Bronze|Medallion|Cup',
//   'Loot Wood Gold Coins',
//   'Loot Silver Pistol',
//   'Drop 3',
//   'Steal 3',
//   'Yohoho!'
// ]))



