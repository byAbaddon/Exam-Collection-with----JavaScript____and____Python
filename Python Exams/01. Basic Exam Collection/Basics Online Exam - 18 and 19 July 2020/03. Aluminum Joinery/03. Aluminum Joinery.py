order, model, delivery_type = [input() if x > 0 else int(input()) for x in range(3)]
price = 0

if order < 10:
    print('Invalid order')
    exit()

if model == '90X130':
    price = 110
    if 30 < order <= 60:
        price *= 0.95
    elif order > 60:
        price *= 0.92
elif model == '100X150':
    price = 140
    if 40 < order <= 80:
        price *= 0.94
    elif order > 80:
        price *= 0.90
elif model == '130X180':
    price = 190
    if 20 < order <= 50:
        price *= 0.93
    elif order > 50:
        price *= 0.88
elif model == '200X300':
    price = 250
    if 25 < order <= 50:
        price *= 0.91
    elif order > 50:
        price *= 0.86

price *= order

if delivery_type == 'With delivery':
    price += 60

if order > 99:
    price *= 0.96

print(f'{price:.2f} BGN')


'''
40 
90X130
Without delivery

output: 4180.00
'''
