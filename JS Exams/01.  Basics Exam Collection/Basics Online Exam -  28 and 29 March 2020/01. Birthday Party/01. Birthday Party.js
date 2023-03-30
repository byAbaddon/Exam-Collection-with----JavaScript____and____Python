rent => +rent + rent * .20 + rent * .20 * .55 + rent / 3
//-------------------------------------------(2)--------------------

function birthdayParty(rent) {
  rent =  Number(rent) 
  const cake = rent * 0.2
  const drinks = cake * 0.55
  const animator = rent / 3
  const total = cake + drinks + animator + rent
  return total
}

// console.log(birthdayParty(2250))  //3697.5
// console.log(birthdayParty(3720)) //6113.2
