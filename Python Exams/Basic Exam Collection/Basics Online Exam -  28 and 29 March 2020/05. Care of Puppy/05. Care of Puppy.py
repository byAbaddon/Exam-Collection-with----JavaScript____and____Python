food = int(input()) * 1000
eaten_food = 0

while True:
    gr_food = input()

    if gr_food == 'Adopted':
        break
    else:
      eaten_food += int(gr_food)

if food - eaten_food >= 0:
    print(f'Food is enough! Leftovers: {food - eaten_food} grams.')     
else:
    print(f'Food is not enough. You need {abs(food - eaten_food)} grams more.')  