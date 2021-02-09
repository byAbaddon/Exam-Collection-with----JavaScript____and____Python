function travelAgency(arg) {
let [city ,type, vip, days] = [arg[0], arg[1], arg[2], +arg[3]]
let vipMember = 0 

 arrCity = ["Bansko", "Borovets", "Varna", "Burgas"]
 arrPack = ["noEquipment",  "withEquipment", "noBreakfast", "withBreakfast"]
 if (!arrCity.includes(arg[0]) ||  !arrPack.includes(arg[1])) {
   console.log('Invalid input!');
   return
 }

 if (+arg[arg.length -1] <= 0) {
   console.log('Days must be positive number!');
   return
 }

  cityObj = {'city':{'withEquipment': 100,'noEquipment': 80, 'withBreakfast':130, 'noBreakfast':100  } }
  vipObj = {'vip':{'withEquipment': 10,'noEquipment':5, 'withBreakfast':12, 'noBreakfast':7}  }
   
  vip === 'yes' ? vipMember = vipObj.vip[type] : null
  days > 7 ? days-=  1 : null

  hostel = cityObj.city[type]  //80
  hostel =  (hostel * (100 - vipMember)) / 100  * days

  console.log(`The price is ${hostel.toFixed(2)}lv! Have a nice time!`);
}

//travelAgency(['Borovets', 'noEquipment', 'yes', '10'])
//travelAgency(['Burgas', 'noBreakfast', 'no', '4' ])