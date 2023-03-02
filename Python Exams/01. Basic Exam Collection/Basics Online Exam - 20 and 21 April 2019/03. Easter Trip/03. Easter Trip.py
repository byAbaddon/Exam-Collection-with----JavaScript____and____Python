destination, date, nights = [input() for _ in range(3)]

price_dict = {
    'France': {'21-23': 30, '24-27': 35, '28-31': 40},
    'Italy': {'21-23': 28, '24-27': 32, '28-31': 39},
    'Germany': {'21-23': 32, '24-27': 37, '28-31': 43},
}

print(f'Easter trip to {destination} : {price_dict[destination][date] * int(nights):.2f} leva.')
# ------------------------------------------(2)--------------
destination = input()
data = input()
nights = int(input())

price_dict = {
   'France' : {'21-23' : 30, '24-27' : 35, '28-31' : 40 },
   'Italy' : {'21-23' : 28, '24-27' : 32, '28-31' : 39 },
   'Germany' : {'21-23' : 32, '24-27' : 37, '28-31' : 43 },
}

print(f'Easter trip to {destination} : {price_dict[destination][data] * nights:.2f} leva.')
