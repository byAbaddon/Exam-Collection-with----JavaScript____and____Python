film_name, salon_type, tickets_count = [input() for _ in range(3)]

tariff_dict = {
    'A Star Is Born': {'normal' :7.50, 'luxury' : 10.50, 'ultra luxury' : 13.50},
    'Bohemian Rhapsody': {'normal' :7.35, 'luxury' : 9.45, 'ultra luxury' : 12.75},
    'Green Book': {'normal' : 8.15, 'luxury' : 10.25, 'ultra luxury' : 13.25},
    'The Favourite': {'normal' : 8.75, 'luxury' : 11.55, 'ultra luxury' : 13.95 },
}

print(f'{film_name} -> {tariff_dict[film_name][salon_type] * int(tickets_count):.2f} lv.')



'''
The Favourite
ultra luxury
34
'''
