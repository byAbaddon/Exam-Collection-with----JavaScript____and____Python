function fitnessCard(money, gender, age, sport){
 
const gim = {
        'm' :{'Gym' : 42, 'Boxing' : 41, 'Yoga' : 45, 'Zumba' : 34, 'Dances' : 51, 'Pilates' : 39},
        'f' :{'Gym' : 35, 'Boxing' : 37, 'Yoga' : 42, 'Zumba' : 31, 'Dances' : 53, 'Pilates' : 37}
      }

let subtotal = gim[gender][sport]
age <= 19 ? subtotal *= 0.80 : null
total = subtotal - money

if (money >= subtotal)
    return `You purchased a 1 month pass for ${sport}.`
return `You don\'t have enough money! You need $${total.toFixed(2)} more.`

}

//console.log(fitnessCard(50, 'm', 23, 'Gym'))