function gymnastics(country, device) {

    const results_dict = {
    'Russia'   : {'ribbon' :  9.1 + 9.4, 'hoop' : 9.3 + 9.8, 'rope' : 9.6 + 9.0},
    'Bulgaria' : {'ribbon' :  9.6 + 9.4, 'hoop' : 9.55 + 9.75, 'rope' : 9.5 + 9.4},
    'Italy'    : {'ribbon' :  9.2 + 9.5, 'hoop' : 9.45 + 9.35, 'rope' : 9.7 + 9.15},
    }

    let points = results_dict[country][device]
    let max_percent = 100 - (points / 20 * 100)

    return `The team of ${country} get ${points.toFixed(3)} on ${device}.\n${max_percent.toFixed(2)}%`
}

//console.log(gymnastics('Russia', 'rope'))

