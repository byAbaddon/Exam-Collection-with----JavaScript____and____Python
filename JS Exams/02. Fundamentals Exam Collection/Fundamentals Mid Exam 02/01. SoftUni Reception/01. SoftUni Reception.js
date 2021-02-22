function softUniReception(arr) {
  let students = +arr.pop()
  let employees = arr.reduce((a, b) => +a + +b)
  let hours = 0

  while (students > 0) {
    students -= employees
    hours++

    if (hours % 4 == 0) 
      hours++ 
  }

  return `Time needed: ${hours}h.`
}

// console.log(softUniReception(['5','6','4','20']))
// console.log(softUniReception(['1','2','3','45']))
// console.log(softUniReception(['3','2','5','40']))