projection = input()
packet_type = input()
ticket_count = int(input())

movie_dict = {
    'John Wick' : {'Drink' : 12, 'Popcorn' : 15,'Menu': 19 },
    'Star Wars' : {'Drink' : 18, 'Popcorn' : 25,'Menu': 30 },
    'Jumanji'   : {'Drink' : 9, 'Popcorn' : 11,'Menu': 14 },
}

total_sum = movie_dict[projection][packet_type] * ticket_count

if projection == 'Star Wars' and ticket_count >= 4:
    total_sum *= 0.70
elif projection == 'Jumanji' and ticket_count == 2:
    total_sum *= 0.85

print(f'Your bill is {total_sum:.2f} leva.')
