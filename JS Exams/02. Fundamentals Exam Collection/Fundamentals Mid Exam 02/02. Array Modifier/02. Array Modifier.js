function arrayModifier(arr) {
  arr.pop()
  let numbersArr = arr.shift().split(' ').map(Number)

  while (arr.length > 0) {
    const [command, num1, num2] = arr.shift().split(' ').map(el => isNaN(el) ? el : Number(el))
    const firstNum = numbersArr[num1]
    const secondNum = numbersArr[num2]

    if (command == 'swap') {
      numbersArr[num1] = secondNum
      numbersArr[num2] = firstNum
    }

    if (command == 'multiply') {
      let multiply = firstNum * secondNum
      numbersArr[num1] = multiply
    }

    if (command == 'decrease') 
      numbersArr = numbersArr.map(el => el - 1)
  }

  return numbersArr.join(', ')
}

// console.log(arrayModifier([
//   '23 -2 321 87 42 90 -123',
//   'swap 1 3',
//   'swap 3 6',
//   'swap 1 0',
//   'multiply 1 2',
//   'multiply 2 1',
//   'decrease',
//   'end'
// ]))