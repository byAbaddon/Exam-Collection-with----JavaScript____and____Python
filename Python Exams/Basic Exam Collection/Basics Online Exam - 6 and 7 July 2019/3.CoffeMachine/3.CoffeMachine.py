coffee = input()
ingredients = input()
count = int(input())

items_dict ={
    'Espresso':{'Without': 0.90, 'Normal': 1.00, 'Extra': 1.20 },
    'Cappuccino':{'Without': 1.00, 'Normal': 1.20, 'Extra': 1.60 },
    'Tea':{'Without': 0.50, 'Normal': 0.60, 'Extra': 0.70 },
     }

order = items_dict[coffee][ingredients] * count

if coffee == 'Espresso' and count > 4:
    order *= 0.75

if ingredients == 'Without':
    order *=  0.65

if order > 15.0:
    order *= 0.80


print(f'You bought {count} cups of {coffee} for {order:.2f} lv.')


'''
Espresso
Without
10
'''


