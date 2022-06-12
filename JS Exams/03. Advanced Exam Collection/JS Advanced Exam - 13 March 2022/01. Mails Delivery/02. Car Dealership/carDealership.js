//TODO:


class CarDealership {
  constructor(name, availableCars, soldCars, totalIncome) {
    this.name = name
    this.availableCars = []
    this.soldCars = []
    this.totalIncome = 0
  }

  addCar(model, horsepower, price, mileage) {
    if (!model || horsepower < 0.0 || price < 0 || mileage < 0) {
      throw ("Invalid input!")
    }
    this.availableCars.push({ model,  horsepower,  price,  mileage})
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
  }


  sellCar(desiredModel, desiredMileage) {
    let checkModel = this.availableCars.find(x => x.model == desiredModel)

    if (!checkModel) throw (`${model} was not found!`)
    let { model, horsepower, price, mileage} = checkModel

    if (mileage <= desiredMileage) {
      price
    } else if (mileage - desiredMileage <= 40.0000) {
      price *= 0.95
    } else if (mileage - desiredMileage > 40.0000) {
      price *= 0.9
    }

    //remove car
    this.availableCars = this.availableCars.filter(x => x.model != model)
    //add to sold
    this.soldCars.push({model, horsepower, price})
    //add to income
    this.totalIncome += price

    return `${model} was sold for ${price.toFixed(2)}$`
  }

  currentCar() {
    if (!this.availableCars.length) throw ('There are no available cars')
   
    let cars = ['-Available cars:']

    for (const car of this.availableCars) {
      const { model, horsepower, price, mileage } = car
      cars.push(`---${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`)
    }

    return cars.join('\n')
 
  }
  
  salesReport(criteria) {
    let report = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`]
    let sortedSoldCars;

    if (criteria == 'horsepower') {
      sortedSoldCars = this.soldCars.sort( (a, b) => b.horsepower - a.horsepower)
    } else if (criteria == 'model') {
      sortedSoldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
    } else throw ('Invalid criteria!')

    

    for (const car of sortedSoldCars) {
      const { model, horsepower, price } = car
      report.push(`---${model} - ${horsepower} HP - ${price.toFixed(2)}$`)
     
    } 

   return report.join('\n')
  }

}

//---------------------------------------------------------(1)
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000))

//output 1:
// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input

//---------------------------------------------------------(2)
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000))

// Output 2:
// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

//---------------------------------------------------------(3)
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());


// Output 3:
// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

//---------------------------------------------------------(4)
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'))
// console.log(dealership.salesReport('model'))

// Output 4:
// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
