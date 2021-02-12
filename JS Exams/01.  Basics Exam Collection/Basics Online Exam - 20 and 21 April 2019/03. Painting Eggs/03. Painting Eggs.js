function paintingEggs(size, color,  count ) {
    
    const eggsObj = {
        'Large' : {'Red' : 16, 'Green' : 12, 'Yellow' : 9},
        'Medium' : {'Red' : 13, 'Green' : 9, 'Yellow' : 7},
        'Small' : {'Red' : 9, 'Green' : 8, 'Yellow' : 5},
    }
    
    let totalSum = eggsObj[size][color] * count * 0.65
    
    return `${totalSum.toFixed(2)} leva.`
}

//console.log(paintingEggs('Large', 'Red', 7))



