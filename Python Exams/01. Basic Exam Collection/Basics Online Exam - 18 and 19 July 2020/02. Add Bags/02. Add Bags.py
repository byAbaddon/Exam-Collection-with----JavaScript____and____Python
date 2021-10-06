price, kg, days, luggage_count = [float(input()) for _ in range(4)]

if kg < 10:
    price *= 0.2
elif 10 <= kg <= 20:
    price *= 0.5

if int(days) < 7:
    price *= 1.4
elif 7 <= int(days) <= 30:
    price *= 1.15
else:
    price *= 1.1

print(f'The total price of bags is: {price * luggage_count:.2f} lv.')

'''
30
18
15
2
'''