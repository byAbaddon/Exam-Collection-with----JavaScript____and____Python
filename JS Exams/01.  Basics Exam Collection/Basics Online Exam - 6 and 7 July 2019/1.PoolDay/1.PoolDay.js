function poolDay(arg) {
  people = +arg[0]
  tax    = +arg[1]
  shezlong = +arg[2]
  umbrela  = +arg[3]

  enterTax = people * tax  //115.50
  precentShezlong = (Math.ceil(people  * 0.75) * shezlong).toFixed(2) //70.40
  precetnUmbrela =  (Math.ceil(people * 0.50) * umbrela).toFixed(2)   //68.20

  totalPrice = (+enterTax + +precentShezlong + +precetnUmbrela).toFixed(2)
  final = totalPrice + ' lv.'

  console.log(final)
}

//poolDay(['100','8','6','4',])
