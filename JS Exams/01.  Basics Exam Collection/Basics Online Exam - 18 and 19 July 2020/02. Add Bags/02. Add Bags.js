function addBags([price, kg, days, luggageCount]) {
    if (kg < 10) price *= 0.2
    else if (10 <= kg && kg <= 20) price *= 0.5

    if (days < 7) price *= 1.4
    else if (7 <= days && days <= 30) price *= 1.15
    else price *= 1.1

    return `The total price of bags is: ${(price * luggageCount).toFixed(2)} lv.`
}

// console.log(addBags(["30", "18", "15", "2"]))