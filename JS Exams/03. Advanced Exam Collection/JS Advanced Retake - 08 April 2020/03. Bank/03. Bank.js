class Bank {

  constructor(bankName) {
    this._bankName = bankName 
    this.allCustomers = []
  }

  newCustomer(customer) {
    if (this.allCustomers.find(a => a.personalId === customer.personalId)) {
      throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
    }
    customer['transactions'] = []
    this.allCustomers.push(customer)
    return customer
  }

  depositMoney(personalId, amount) {
    let user = this.allCustomers.find(a => a.personalId === personalId)
    if (!user) {
      throw new Error('We have no customer with this ID!')
    }
    if (!user.hasOwnProperty('totalMoney')) {
      user.totalMoney = amount
    } else {
      user.totalMoney += amount
    }
   
    user.transactions.push(`${user.transactions.length + 1}. ${user.firstName} ${user.lastName} made deposit of ${amount}$!`)
    return user.totalMoney + '$'

  }

  withdrawMoney(personalId, amount) {
    if (!this.allCustomers.find(a => a.personalId === personalId)) {
      throw new Error('We have no customer with this ID!')
    }

    let user = this.allCustomers.find(a => a.personalId === personalId)

    if (user.totalMoney < amount) {
      throw new Error(`${user.firstName} ${user.lastName} does not have enough money to withdraw that amount!`)
    } else {   
      user.transactions.push(`${user.transactions.length + 1}. ${user.firstName} ${user.lastName} withdrew ${amount}$!`)
      user.totalMoney -= amount
      return user.totalMoney + '$'
    }
  }

  customerInfo(personalId) { 
    let customer = this.allCustomers.find(a => a.personalId === personalId)
    if (!customer) {
      throw new Error('We have no customer with this ID!')
    }

    let strInfo = `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$`
    let sort = customer.transactions.sort((b, a) => Number(a.slice(0,1)) - Number(b.slice(0,1)))  
    strInfo += `\nTransactions:\n${sort.join('\n')}`
      
    return strInfo.trim()
  }
}



// let bank = new Bank('SoftUni Bank');

// console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
// console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596,555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));



//////////////// output: //////////////
// { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 } 
// { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }

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

