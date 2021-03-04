days = int(input())
food = int(input())
dog_food = 0
cat_food = 0
cookies = 0

for day in range( 1, days + 1):
    if day % 3 == 0:
        dog = int(input())
        cat = int(input())
        dog_food += dog
        cat_food += cat
        cookies += (dog + cat)  / 10
        continue
    dog_food += int(input())
    cat_food += int(input())
    

all_eaten_food =  (dog_food + cat_food) / food * 100
eaten_food = (food - (food - (dog_food + cat_food)))  / 10
eaten_food_dog = dog_food / eaten_food * 10
eaten_food_cat = cat_food / eaten_food * 10

print(f'Total eaten biscuits: {round(cookies)}gr.')
print(f'{all_eaten_food:.2f}% of the food has been eaten.')
print(f'{eaten_food_dog:.2f}% eaten from the dog.')
print(f'{eaten_food_cat:.2f}% eaten from the cat.')

