minutes =  int(input())
day_walk = int(input())
calories = int(input())

all_walk = minutes * day_walk
burnet_calories = all_walk  * 5

if calories / 2 <= burnet_calories:
    print(f'Yes, the walk for your cat is enough. Burned calories per day: {burnet_calories}.')
else:    
    print(f'No, the walk for your cat is not enough. Burned calories per day: {burnet_calories}.')

