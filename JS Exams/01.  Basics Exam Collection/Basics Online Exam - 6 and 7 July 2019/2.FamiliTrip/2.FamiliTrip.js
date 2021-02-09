function familyTrip(p) {
  let budget = +p[0]
  let nights = +p[1]
  let price = +p[2]
  let percent = +p[3]
  let subtotal = 0

  if (nights > 7) {
    subtotal = (price * 0.95) * nights //760
  } else {
    subtotal = (price) * nights //462 
  }

  let discount = budget * percent / 100
  let total = (subtotal + discount).toFixed(2)
  let finalSum = (budget - total).toFixed(2)


  if (finalSum < 0) {
    console.log(`${Math.abs(finalSum).toFixed(2)} leva needed.`);
  } else {
    s = Number(finalSum).toFixed(2)
    console.log(`Ivanovi will be left with ${s} leva after vacation.`);
  }
}

//familyTrip(['800.50', '8', '100', '2',])
//familyTrip(['500', '7', '66', '15',])