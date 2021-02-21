function needForSpeed(arr) {
  arr.pop()
  let numberOfCars = +arr.shift()
  carsObj = {}

  while (numberOfCars--) {
    const [car, km, fuel] = arr.shift().split('|').map(el => isNaN(el) ? el : Number(el))
    carsObj[car] = {km, fuel}
  }

  while (arr.length > 0) {
    let [command, car, arg1, arg2] = arr.shift().split(' : ').map(el => isNaN(el) ? el : Number(el))
    
    if (command == 'Drive') {
      let distance = arg1
      let fuel = arg2

      if (carsObj[car].fuel < fuel) {
        console.log('Not enough fuel to make that ride')
      } else {
        carsObj[car].km += distance
        carsObj[car].fuel -= fuel
        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
      }

      if (carsObj[car].km >= 100000) {
        console.log(`Time to sell the ${car}!`)
        delete carsObj[car]
      }
    }

    if (command == 'Refuel') {
      let fuel = arg1
      if (carsObj[car].fuel + fuel > 75) {
        fuel = 75 - carsObj[car].fuel
        carsObj[car].fuel = 75
      } else {
        carsObj[car].fuel += fuel
      }

      console.log(`${car} refueled with ${fuel} liters`)
    }

    if (command == 'Revert') {
      let km = arg1
      carsObj[car].km -= km
      carsObj[car].km < 10000 ? carsObj[car].km = 10000 : console.log(`${car} mileage decreased by ${km} kilometers`)
    }
  }

  let sortCars = Object.entries(carsObj).sort((a, b) => b[1].km - a[1].km || a[0].localeCompare(b[0]))

  for (const key of sortCars)
    console.log(`${key[0]} -> Mileage: ${key[1].km} kms, Fuel in the tank: ${key[1].fuel} lt.`)
}


// needForSpeed([
//   '3',
//   'Audi A6|38000|62',
//   'Mercedes CLS|11000|35',
//   'Volkswagen Passat CC|45678|5',
//   'Drive : Audi A6 : 543 : 47',
//   'Drive : Mercedes CLS : 94 : 11',
//   'Drive : Volkswagen Passat CC : 69 : 8',
//   'Refuel : Audi A6 : 50',
//   'Revert : Mercedes CLS : 500',
//   'Revert : Audi A6 : 30000',
//   'Stop',
// ])

// needForSpeed([
// '4',
// 'Lamborghini Veneno|11111|74',
// 'Bugatti Veyron|12345|67',
// 'Koenigsegg CCXR|67890|12',
// 'Aston Martin Valkryie|99900|50',
// 'Drive : Koenigsegg CCXR : 382 : 82',
// 'Drive : Aston Martin Valkryie : 99 : 23',
// 'Drive : Aston Martin Valkryie : 2 : 1',
// 'Refuel : Lamborghini Veneno : 40',
// 'Revert : Bugatti Veyron : 2000',
// 'Stop',
// ])