function series(arg) {
    let budget = arg.shift()
    let serialsNumbers = arg.shift()
    const discount_dict = {'Thrones' : 0.50, 'Lucifer' : 0.60, 'Protector' : 0.70, 'TotalDrama' : 0.80, 'Area' : 0.90}

    for (let i = 0; i < serialsNumbers; i++) {
        let serialName = arg.shift()
        let serialPrice = arg.shift()

        if (discount_dict[serialName]) {
            serialPrice *= discount_dict[serialName]
        }
        budget -= serialPrice
    }

    if (budget >= 0)
        return `You bought all the series and left with ${budget.toFixed(2)} lv.`
    return `You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`
}

//console.log(series([25, 6, 'Teen Wolf', 8, 'Protector', 5, 'TotalDrama', 5, 'Area', 4, 'Thrones', 5, 'Lucifer', 9]))