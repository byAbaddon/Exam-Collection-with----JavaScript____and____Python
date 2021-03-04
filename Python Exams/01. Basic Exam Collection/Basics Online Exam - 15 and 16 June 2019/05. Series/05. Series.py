budget = float(input())
serials_numbers = int(input())
discount_dict = {'Thrones' : 0.50, 'Lucifer' : 0.60, 'Protector' : 0.70, 'TotalDrama' : 0.80, 'Area' : 0.90}

for _ in range(serials_numbers):
    serial_name = input()
    serial_price = float(input())

    if serial_name in discount_dict.keys():
       serial_price *= discount_dict[serial_name]
    budget -= serial_price


if budget >= 0:
    print(f'You bought all the series and left with {budget:.2f} lv.')
else:
    print(f'You need {abs(budget):.2f} lv. more to buy the series!')


'''
25
6
Teen Wolf
8
Protector
5
TotalDrama
5
Area
4
Thrones
5
Lucifer
9
'''
