 function easterParty(guestsNumber, invitePrice, budget) {

     if (10 <= guestsNumber && guestsNumber <= 15) {
         invitePrice *= 0.85
     } else if (15 < guestsNumber && guestsNumber <= 20) {
         invitePrice *= 0.80
     } else if (guestsNumber > 20)
         invitePrice *= 0.75

     let cakePrice = budget * 0.10
     let totalSum = guestsNumber * invitePrice + cakePrice

     if (budget < totalSum)
         return `No party! ${(totalSum - budget).toFixed(2)} leva needed.`
     return `It is party time! ${(budget - totalSum).toFixed(2)} leva left.`
 }

 //console.log(easterParty(18, 30, 450))