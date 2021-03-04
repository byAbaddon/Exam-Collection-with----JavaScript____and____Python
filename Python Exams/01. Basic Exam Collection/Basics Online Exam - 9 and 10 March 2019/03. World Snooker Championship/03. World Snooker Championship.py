stage = input()
ticket_type = input()
ticket_count = int(input())
cup_picture = input()
is_take_a_photo = False

tickets_dict = {
    'Standard' : {'Quarter final' : 55.50, 'Semi final' : 75.88 ,'Final' : 110.10},
    'Premium' : {'Quarter final' : 105.20, 'Semi final' : 125.22 ,'Final' : 160.66},
    'VIP' : {'Quarter final' : 118.90, 'Semi final' : 300.40 ,'Final' : 400.00},
}

total_price = tickets_dict[ticket_type][stage] * ticket_count
if total_price > 4000:
    total_price *= 0.75
    is_take_a_photo = True
elif 2500 < total_price <= 4000:
    total_price *= 0.90

if cup_picture == 'Y' and is_take_a_photo != True:
        total_price += ticket_count * 40

print(f'{total_price:.2f}')


'''
Final
Premium
25
Y
'''
