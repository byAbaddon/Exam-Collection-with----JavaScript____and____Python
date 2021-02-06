guests_number = int(input())
invite_price = float(input())
budget = float(input())

if 10 <= guests_number <= 15:
    invite_price *= 0.85
elif 15 < guests_number <= 20:
    invite_price *=  0.80
elif guests_number > 20:
    invite_price *= 0.75

cake_price = budget * 0.10

total_sum = guests_number * invite_price + cake_price

if budget < total_sum:
    print(f'No party! {total_sum - budget:.2f} leva needed.')
else:
    print(f'It is party time! {budget - total_sum:.2f} leva left.')
