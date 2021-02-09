function shoping(arg) {
 budget = arg[0]
 
 card = arg[1] * 250
 cpu  = arg[2] * (card * 0.35)
 ram  = arg[3] * (card * 0.10)

 sum = card + cpu + ram
 subtotal =  arg[1] > arg[2] ? sum-= (sum * 0.15) : sum
 total = Math.abs(budget - subtotal).toFixed(2)

 console.log( sum <= budget ? `You have ${total} leva left!` : `Not enough money! You need ${total} leva more!` );
}

//shoping(['900', '2', '1', '3'])

