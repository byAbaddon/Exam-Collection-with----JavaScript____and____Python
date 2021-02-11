function movieStars(...arg) {
    let allBudget = +arg.shift()

    while (true) {    
            let actionName = arg.shift()
            if (actionName == 'ACTION') {
                break
            }

            if (actionName.length > 15){
                allBudget *= 0.80
            continue
            }else{
                honorarium = +arg.shift()
            }
            allBudget -= honorarium

            if (allBudget <= 0){
                break
            }
        }

    if (allBudget >= 0)
        return `We are left with ${allBudget.toFixed(2)} leva.`
    return `We need ${(Math.abs(allBudget)).toFixed(2)} leva for our actors.`
}

// console.log(movieStars(
//     '90000',
//     'Christian Bale',
//     '70000.50',
//     'Leonard DiCaprio',
//     'Kevin Spacey',
//     '24000.99',
//     'ACTION'))