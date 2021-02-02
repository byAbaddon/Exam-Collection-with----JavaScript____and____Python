budget = float(input())
fuel = int(input())
day_of_week = input()

fuel_price = 2.10
gid_price = 100

subtotal = fuel * fuel_price + gid_price

if day_of_week == 'Saturday':
    subtotal *= 0.90
elif day_of_week == 'Sunday':
    subtotal *= 0.80


total = abs(budget - subtotal)

if budget >= subtotal :
    print(f'Safari time! Money left: {total:.2f} lv.')
else:
    print(f'Not enough money! Money needed: {total:.2f} lv.')



'''
120
30
Saturday
'''
