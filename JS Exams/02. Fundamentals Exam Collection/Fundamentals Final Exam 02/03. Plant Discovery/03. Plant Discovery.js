//--------------------------------------------------------------Solution without sorting

function plantDiscovery(arr) {
  arr.pop()
  let numberOfPlant = arr.shift()
  let plantObj = {}

  while (numberOfPlant--) {
    const [plan, rarity] = arr.shift().split('<->')
    plantObj[plan] = {rarity, 'rating':[]}  
  }

  while (arr.length > 0) {
    const [command, plan, points] = arr.shift().match(/[^':\s-]+/g)
    if (!plantObj.hasOwnProperty(plan)) {
      console.log('error')
      continue
    }     
    command == 'Rate' ? plantObj[plan].rating.push(+points) : command == 'Reset' ? plantObj[plan].rating = [] : plantObj[plan].rarity = points
  }

  for (const [key, val] of Object.entries(plantObj)) {
    let getLength = val.rating.length
    try {
      plantObj[key].rating = val.rating.reduce((a, b) => a + b) / getLength
    } catch {
      plantObj[key].rating = 0
    }
  }

  console.log('Plants for the exhibition:')
  for (const key of Object.entries(plantObj))  console.log(`- ${key[0]}; Rarity: ${key[1].rarity}; Rating: ${key[1].rating.toFixed(2)}`)  
}


//--------------------------------------------------------------Solution with sorting
function plantDiscovery(arr) {
  arr.pop()
  let numberOfPlant = arr.shift()
  let plantObj = {}

  while (numberOfPlant--) {
    const [plan, rarity] = arr.shift().split('<->')
    plantObj[plan] = {rarity, 'rating':[]}  
  }

  while (arr.length > 0) {
    const [command, plan, points] = arr.shift().match(/[^':\s-]+/g)
    if (!plantObj.hasOwnProperty(plan)) {
      console.log('error')
      continue
    }     
    command == 'Rate' ? plantObj[plan].rating.push(+points) : command == 'Reset' ? plantObj[plan].rating = [] : plantObj[plan].rarity = points
  }

  for (const [key, val] of Object.entries(plantObj)) {
    let getLength = val.rating.length
    try {
      plantObj[key].rating = val.rating.reduce((a, b) => a + b) / getLength
    } catch {
      plantObj[key].rating = 0
    }
  }

  let sortObj = Object.entries(plantObj).sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating)
  console.log('Plants for the exhibition:')
  for (const key of sortObj)  console.log(`- ${key[0]}; Rarity: ${key[1].rarity}; Rating: ${key[1].rating.toFixed(2)}`)  
}




// plantDiscovery([
//   '3',
//   'Arnoldii<->4',
//   'Woodii<->7',
//   'Welwitschia<->2',
//   'Rate: Woodii - 10',
//   'Rate: Welwitschia - 7',
//   'Rate: Arnoldii - 3',
//   'Rate: Woodii - 5',
//   'Update: Woodii - 5',
//   'Reset: Arnoldii',
//   'Exhibition',
// ])

// plantDiscovery([
//   '2',
//   'Candelabra<->10',
//   'Oahu<->10',
//   'Rate: Oahu - 7',
//   'Rate: Candelabra - 6',
//   'Exhibition',
// ])
