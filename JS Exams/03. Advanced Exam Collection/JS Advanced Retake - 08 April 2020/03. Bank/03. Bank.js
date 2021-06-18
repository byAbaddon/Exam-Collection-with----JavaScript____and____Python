class Bank {
  constructor(_bankName = String, allCustomers = []) {
    this._bankName = _bankName
    this.allCustomers = allCustomers
    this.clientTransaction = {}
  }

  findClientByID(id) {
    return this.allCustomers.find(x => x.personalId == id)
  }


  newCustomer(cst = { firstName, lastName, personalId }) {
    if (this.findClientByID(cst.personalId))
      throw new Error(`${cst.firstName} ${cst.lastName} is already our customer!`)
    this.allCustomers.push(cst)
    return cst
  }

  depositMoney(personalId, amount) {
    let client = this.findClientByID(personalId)
    if (!client) throw new Error('We have no customer with this ID!')
    client.totalMoney = (client.totalMoney || 0) + Number(amount)
 
    this.clientTransaction[client.personalId] = this.clientTransaction[client.personalId] || []
    this.clientTransaction[client.personalId].push(`${client.firstName} ${client.lastName} made deposit of ${amount}$!`)
    
    return `${client.totalMoney}$`
  }

  withdrawMoney(personalId, amount) {
    let client = this.findClientByID(personalId)
    if (!client) throw new Error('We have no customer with this ID!')
    if (client.totalMoney < amount) throw  new Error(`${client.firstName} ${client.lastName} does not have enough money to withdraw that amount!`)
    client.totalMoney -= amount

    this.clientTransaction[client.personalId] = this.clientTransaction[client.personalId] || []
    this.clientTransaction[client.personalId].push(`${client.firstName} ${client.lastName} withdrew ${amount}$!`)
    return `${client.totalMoney}$`
    
  }

  customerInfo(personalId) {
    let client = this.findClientByID(personalId)
    if (!client) throw new Error('We have no customer with this ID!')
    return `Bank name: ${this._bankName}
Customer name: ${client.firstName} ${client.lastName}
Customer ID: ${client.personalId}
Total Money: ${client.totalMoney}$
Transactions:\n${this.clientTransaction[client.personalId].reverse()
      .map((x, i, ar) => `${ar.length - i}. ${x}`)
      .join('\n')}`
  }
  
}


// let bank = new Bank('SoftUni Bank')

// console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));



// Corresponding output
// { firstName: ‘Svetlin', lastName: ‘Nakov', personalId: 6233267 }
// { firstName: ‘Mihaela', lastName: ‘Mileva', personalId: 4151596 }
// 500$
// 375$
// Bank name: SoftUni Bank
// Customer name: Svetlin Nakov
// Customer ID: 6233267
// Total Money: 375$
// Transactions:
// 3. Svetlin Nakov withdrew 125$!
// 2. Svetlin Nakov made depostit of 250$!
// 1. Svetlin Nakov made depostit of 250$!


