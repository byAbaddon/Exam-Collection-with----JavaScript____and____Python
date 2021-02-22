function numbers(arr) {
  arr = arr.split(' ').map(Number)
  let average = arr.reduce((a, b) => a + b) / arr.length
  arr = arr.filter(el => el > average).sort((a, b) => b - a).slice(0, 5)

  return arr.length ? arr.join(' ') : 'No'
}

// console.log(numbers('1'))
// console.log(numbers('-1 -2 -3 -4 -5 -6'))
// console.log(numbers('10 20 30 40 50'))
// console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'))