function computerStore(arr) {
  let typeDiscount = arr.pop()
  typeDiscount == 'special' ? typeDiscount = 10 : typeDiscount  = 0
  let sum = 0

  while (arr.length > 0) {
    let currentPrice = +arr.shift()
    currentPrice < 0 ? console.log('Invalid price!') : sum += currentPrice
  }

  if (sum <= 0) return 'Invalid order!'

  let labelOne = 'Congratulations you\'ve just bought a new computer!'
  let labelTwo = `Price without taxes: ${sum.toFixed(2)}$`
  let currentSum = sum
  let sumTax = currentSum - sum * 0.80
  let labelThree = `Taxes: ${sumTax.toFixed(2)}$`
  let subtotalSum = currentSum + sumTax
  let totalSum = subtotalSum - (sum + sumTax) * (typeDiscount / 100)

  return `${labelOne}\n${labelTwo}\n${labelThree}\n${'-'.repeat(11)}\nTotal price: ${totalSum.toFixed(2)}$`
}

// console.log(computerStore(['1050', '200', '450', '2', '18.50 ', '16.86 ', 'special']))
// console.log(computerStore(['1023 ','15','-20','-5.50','450','20 ','17.66 ','19.30','regular']))
// console.log(computerStore(['regular']))