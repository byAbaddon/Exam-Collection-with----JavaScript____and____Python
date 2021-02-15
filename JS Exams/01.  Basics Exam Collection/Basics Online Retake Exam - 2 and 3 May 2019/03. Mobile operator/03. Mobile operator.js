function mobileOperator(contractTerm, contractType, isAddMobileNet, numberMounts) {
    const tariff_dict = {
        'one' : {'Small' : 9.98 , 'Middle': 18.99, 'Large': 25.98, 'ExtraLarge' : 35.99},
        'two' : {'Small' : 8.58 , 'Middle': 17.09, 'Large': 23.59, 'ExtraLarge' : 31.79},
    }
    
    let subtotal = tariff_dict[contractTerm][contractType]

    if (isAddMobileNet === 'yes') {
        if (subtotal <= 10) {
            subtotal += 5.50
        } else if (subtotal <= 30) {
            subtotal += 4.35
        } else if (subtotal > 30) {
            subtotal += 3.85
        }
    }

    let moreOneYearDiscount = 0.9625

    if (contractTerm == 'two') {
        subtotal *= moreOneYearDiscount
    }

    let total = subtotal * numberMounts

    return `${total.toFixed(2)} lv.`
}

// console.log(mobileOperator('one', 'Small', 'yes', 10))