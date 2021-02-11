function filmPremiere(projection, packet_type, ticket_count) {
    const movie_dict = {
        'John Wick' : {'Drink' : 12, 'Popcorn' : 15,'Menu': 19 },
        'Star Wars' : {'Drink' : 18, 'Popcorn' : 25,'Menu': 30 },
        'Jumanji'   : {'Drink' : 9, 'Popcorn' : 11,'Menu': 14 },
    }

    let total_sum = movie_dict[projection][packet_type] * ticket_count

    if (projection === 'Star Wars' && ticket_count >= 4) {
        total_sum *= 0.70
    } else if (projection === 'Jumanji' && ticket_count == 2) {
        total_sum *= 0.85
    }

    return `Your bill is ${total_sum.toFixed(2)} leva.`
}

//console.log(filmPremiere('John Wick', 'Drink', 6))