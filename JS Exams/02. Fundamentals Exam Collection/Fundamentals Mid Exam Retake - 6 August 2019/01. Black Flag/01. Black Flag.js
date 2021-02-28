function blackFlag(input) {
  let [daysOfPlunder, dailyPlunder, expectedPlunder, totalPlunder, day] = [...input.map(Number), 0, 0]
  
  while(day++ != daysOfPlunder) {
    totalPlunder += dailyPlunder
    if (day % 3 === 0) totalPlunder += dailyPlunder * 0.5
    if (day % 5 === 0) totalPlunder *=  0.7  
  }

  return totalPlunder >= expectedPlunder ?
    `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.` :
    `Collected only ${(totalPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`
}

// console.log(blackFlag([5, 40, 100]))
// console.log(blackFlag([10, 20, 380]))