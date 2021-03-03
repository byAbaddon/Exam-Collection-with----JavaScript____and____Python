function santasNewList(arr) {
  arr.pop()
  childObj = {}
  giftsObj = {}

  for (const token of arr) {
    const [name, gift, amount] = token.split('->').map(el => Number(el) || el)

    if (name == 'Remove') {
      delete childObj[gift]
      continue
    }

    if (!giftsObj[gift]) giftsObj[gift] = amount
    else giftsObj[gift] += amount

    if (!childObj[name]) childObj[name] = amount
    else childObj[name] += amount
  }

  let sortChildObj = Object.entries(childObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  console.log('Children:')
  for (const [key, val] of sortChildObj) console.log(key, '->', val)

  console.log('Presents:')
  for (const [key, val] of Object.entries(giftsObj)) console.log(key, '->', val)
}

// santasNewList([
// 'Marty->Toys->5',
// 'Sam->Candy->20',
// 'Leo->Candy->10',
// 'Leo->Toys->1',
// 'Katy->Clothes->4',
// 'Bobbie->Clothes->6',
// 'Tanya->Phone->1',
// 'Nasko->Tablet->3',
// 'END',
// ])

// santasNewList([
//   'Teddy->Clothes->8',
//   'Johny->Toys->10',
//   'Freddie->Candy->30',
//   'Johny->Candy->20',
//   'Carrie->Phone->1',
//   'Carrie->Tablet->1',
//   'Carrie->Candy->10',
//   'Teddy->Toys->5',
//   'Remove->Teddy',
//   'END',
// ])