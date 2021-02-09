function myFun(arg) {
  let coffee = arg[0]
  let ingredients  = arg[1]
  let count = +arg[2]

let obj ={
    'Espresso':{'Without': 0.90, 'Normal': 1.00, 'Extra': 1.20 },
    'Cappuccino':{'Without': 1.00, 'Normal': 1.20, 'Extra': 1.60 },
    'Tea':{'Without': 0.50, 'Normal': 0.60, 'Extra': 0.70 },
     }

let order = obj[coffee][ingredients] * count

  if (coffee === 'Espresso' && count > 4) {
    order -=  (order * 0.25)   
  }
    
  if (ingredients === 'Without' ) {
      order -=  (order * 0.35)   
     }

  if (order > 15.0) {
        order -=  (order * 0.20)   
      }

console.log(`You bought ${count} cups of ${coffee} for ${order.toFixed(2)} lv.`);
}

//myFun(['Espresso', 'Without', '10'])


  