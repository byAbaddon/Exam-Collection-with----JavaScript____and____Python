meal_price = float(input())
meal_kg = float(input())
sugar_kg = float(input())
egs_packets = int(input())
yeast_packets = int(input())

sugar_price = meal_price * 0.75
egs_price = meal_price * 1.10
yeast_price = sugar_price * 0.20

meal_price *= meal_kg
sugar_price *= sugar_kg
egs_price *= egs_packets
yeast_price *= yeast_packets

total_sum = meal_price + sugar_price + egs_price + yeast_price
print(f'{total_sum:.2f}')


'''
50
10
3.5
6
1
'''
