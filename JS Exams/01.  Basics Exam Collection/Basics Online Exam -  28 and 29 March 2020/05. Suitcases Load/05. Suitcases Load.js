function suitcasesLoad(arg) {
  let capacity = arg.shift()
  let luggage = arg.shift()
  let count = 0

  while (luggage !== 'End') {
    count++
    count % 3 == 0 ? capacity -= luggage * 1.10 : capacity -= luggage
   
    if (capacity < 0) {
      count--
      return `No more space!\nStatistic: ${count} suitcases loaded.`
    }

    luggage = arg.shift()
    
  }

  return `Congratulations! All suitcases are loaded!\nStatistic: ${count} suitcases loaded.`
}

// console.log(suitcasesLoad([550, 100, 252, 72, 'End']))