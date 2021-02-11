function  movieDestination(budget, destination, season, dayCount) {
    const country_dict = {
        'Dubai' : {'Winter' : 45000, 'Summer' : 40000,},
        'Sofia' : {'Winter' : 17000, 'Summer' : 12500,},
        'London' : {'Winter': 24000, 'Summer' : 20250,},
    }

    let totalSum = country_dict[destination][season] * dayCount

    if (destination == 'Dubai'){
        totalSum *= 0.70
    }else if(destination == 'Sofia'){
        totalSum *= 1.25
    }

    if (budget < totalSum)
        return `The director needs ${(totalSum - budget).toFixed(2)} leva more!`
    return `The budget for the movie is enough! We have ${(budget - totalSum).toFixed(2)} leva left!`
}

// console.log(movieDestination(400000, 'Sofia', 'Winter', 20))
