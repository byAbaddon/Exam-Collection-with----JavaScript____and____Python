function easterTrip(destination, data, nights) {
   
   const priceObj = {
      'France' : {'21-23' : 30, '24-27' : 35, '28-31' : 40 },
      'Italy' : {'21-23' : 28, '24-27' : 32, '28-31' : 39 },
      'Germany' : {'21-23' : 32, '24-27' : 37, '28-31' : 43 },
   }

   return `Easter trip to ${destination} : ${(priceObj[destination][data] * nights).toFixed(2)} leva.`
}

//console.log(easterTrip('Germany', '24-27', 5))