from math import ceil

guests_count = int(input())
budget = int(input())

one_cake_price = 4
one_egg_price = 0.45

all_cakes = ceil(guests_count / 3)
all_eggs = guests_count * 2

cakes_price = all_cakes * one_cake_price
eqq_price = all_eggs * one_egg_price
total_price = cakes_price + eqq_price

if total_price <= budget:
    print(f'Lyubo bought {all_cakes} Easter bread and {all_eggs} eggs.\nHe has {budget - total_price:.2f} lv. left.')
else:
    print(f'Lyubo doesn\'t have enough money.\nHe needs {total_price - budget:.2f} lv. more.')
