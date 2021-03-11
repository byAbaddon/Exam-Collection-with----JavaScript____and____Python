from math import floor

day_product = int(input())
count_workers = int(input())
factory_production = int(input())

coins = 0

for i in range(1, 31):
    if i % 3 == 0:
        coins += floor((day_product * count_workers) * 0.75)
    else:
        coins += floor(day_product * count_workers)

difference = factory_production - coins
percent_production = abs(difference / factory_production * 100)

print(f'You have produced {coins} biscuits for the past month.')
if factory_production < coins:
    more_less = 'more' 
else:
    more_less = 'less'
    
print(f'You produce {percent_production:.2f} percent {more_less} biscuits.')   