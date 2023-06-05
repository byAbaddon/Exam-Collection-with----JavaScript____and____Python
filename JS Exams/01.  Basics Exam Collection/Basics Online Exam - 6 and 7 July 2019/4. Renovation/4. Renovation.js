function renovation(arg) {
  let [hight, weight, percent] = [...arg]
  let qm = (hight * weight * 4) * (100 - percent) / 100
  let num = 3
  while (arg[num]) {

    if (arg[num] == 'Tired!') {
      console.log(`${Math.ceil(qm)} quadratic m left.`)
      return
    }
    qm -= arg[num]
    num++
  }

  if (qm >= 0) {
    console.log(`All walls are painted! Great job, Pesho!`)
  } else {
    console.log(`All walls are painted and you have ${Math.abs(Math.ceil(qm))} l paint left!`)
  }
}

//renovation(['3', '5', '10', '2', '3', '4', 'Tired!']) 
