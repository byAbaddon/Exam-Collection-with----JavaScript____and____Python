from math import ceil, floor
price_one_rocket, rocket_count, sneakers_count = [float(input()) for _ in range(3)]

all_rocket_price = price_one_rocket * rocket_count
one_sneakers_price = price_one_rocket / 6
all_sneakers_price = sneakers_count * one_sneakers_price
other_equipment = (all_rocket_price + all_sneakers_price) * 0.20
total_price = all_rocket_price + all_sneakers_price + other_equipment

print(f'Price to be paid by Djokovic {floor(total_price / 8)}')
print(f'Price to be paid by sponsors {(ceil(total_price * 7 / 8))}')
