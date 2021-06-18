class Parking {
  constructor(capacity = 0, vehicles = []) {
    Object.assign(this, {capacity, vehicles})
  }

  findByNumber(carNumber) {
    return this.vehicles.find(x => x.carNumber === carNumber)
  }

  addCar(carModel, carNumber) {
    if (this.capacity <= 0) throw 'Not enough parking space.'
    this.vehicles.push({carModel, carNumber, payed: false})
    this.capacity--
    return `The ${carModel}, with a registration number ${carNumber}, parked.`
  }

  removeCar(carNumber) {
    let carObj = this.findByNumber(carNumber)
    if (!carObj) throw 'The car, you\'re looking for, is not found.'
    if (!carObj.payed) throw `${carNumber} needs to pay before leaving the parking lot.`

    let index = this.vehicles.indexOf(carObj)
    delete this.vehicles[index]

    this.capacity++
    return `${carNumber} left the parking lot.`
  }

  pay(carNumber) {
    let carObj = this.findByNumber(carNumber)
    if (!carObj) throw `${carNumber} is not in the parking lot.`
    if (carObj.payed) throw `${carNumber}'s driver has already payed his ticket.`

    carObj.payed = true
    return `${carNumber}'s driver successfully payed for his stay.`
  }

  getStatistics(carNumber) {
    let capacityParking = `The Parking Lot has ${this.capacity} empty spots left.\n`

    if (carNumber != undefined) { //print only one car by number
      let carObj = this.findByNumber(carNumber)
      return `${carObj.carModel} == ${carObj.carNumber} - ${carObj.payed ? 'Has payed' : 'Not payed'}`
    }

    return capacityParking + this.vehicles
      .sort((a, d) => a.carModel.localeCompare(d.carModel))
      .map(x => `${x.carModel} == ${x.carNumber} - ${x.payed ? 'Has payed' : 'Not payed'}`)
      .join('\n')
  }

}



// const parking = new Parking(12);

// console.log(parking.addCar("Volvo t600", "TX3691CA"));
// console.log(parking.getStatistics());
// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));


// Corresponding output
// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.