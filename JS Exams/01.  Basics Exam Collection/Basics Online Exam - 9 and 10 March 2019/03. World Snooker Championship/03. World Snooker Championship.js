function worldSnookerChampionship(stage, ticket_type, ticket_count, cup_picture) {
    let is_take_a_photo = false

    const tickets_dict = {
        'Standard' : {'Quarter final' : 55.50, 'Semi final' : 75.88 ,'Final' : 110.10},
        'Premium' : {'Quarter final' : 105.20, 'Semi final' : 125.22 ,'Final' : 160.66},
        'VIP' : {'Quarter final' : 118.90, 'Semi final' : 300.40 ,'Final' : 400.00},
    }

    let total_price = tickets_dict[ticket_type][stage] * ticket_count
    if (total_price > 4000) {
        total_price *= 0.75
        is_take_a_photo = true
    } else if (2500 < total_price && total_price <= 4000) {
        total_price *= 0.90
    }

    cup_picture == 'Y' && is_take_a_photo != true ? total_price += ticket_count * 40 : null

    return total_price.toFixed(2)
}

//console.log(worldSnookerChampionship('Final', 'Premium', 25, 'Y'))