function santasGifts(arr) {
  arr.shift()
  let houseNumbersArr = arr.shift().split(' ').map(Number)

  let santaPosition = 0
  for (const token of arr) {
    const [command, startIndex, endIndex] = token.split(' ').map(el => Number(el) || el)

    if (command == 'Forward') {
      let index = santaPosition + startIndex
      if (houseNumbersArr[index]) {
        houseNumbersArr.splice(index, 1)
        santaPosition = index
      }
    }


    if (command == 'Back') {
      index = santaPosition - startIndex
      if (houseNumbersArr[index]) {
        houseNumbersArr.splice(index, 1)
        santaPosition = index
      }
    }

    if (command == 'Gift') {
      if (houseNumbersArr[startIndex]) {
        houseNumbersArr.splice(startIndex, 0, endIndex)
        santaPosition = startIndex
      }
    }


    if (command == 'Swap') {
      let firstIndexNum = houseNumbersArr.indexOf(startIndex)
      let lastIndexNum = houseNumbersArr.indexOf(endIndex)

      if (firstIndexNum != -1 && lastIndexNum != -1) {
        houseNumbersArr.splice(firstIndexNum, 1, endIndex)
        houseNumbersArr.splice(lastIndexNum, 1, startIndex)
      }
    }
  }

  return `Position: ${santaPosition}\n${houseNumbersArr.join(', ')}`
}



console.log(santasGifts([
  '5',
  '255 500 54 78 98 24 30 47 69 58',
  'Forward 1',
  'Swap 54 47',
  'Gift 1 20',
  'Back 1',
  'Forward 3',
]))



console.log(santasGifts([
  '6',
  '50 40 25 63 78 54 66 77 24 87',
  'Forward 4',
  'Back 3',
  'Forward 3',
  'Gift 2 88',
  'Swap 50 87',
  'Forward 1',
]))