contract_term = input()
contract_type = input()
is_add_mobile_net = input()
number_mounts = int(input())

tariff_dict = {
    'one' : {'Small' : 9.98 , 'Middle': 18.99, 'Large': 25.98, 'ExtraLarge' : 35.99},
    'two' : {'Small' : 8.58 , 'Middle': 17.09, 'Large': 23.59, 'ExtraLarge' : 31.79},
}

subtotal = tariff_dict[contract_term][contract_type]

if is_add_mobile_net == 'yes':
    if subtotal <= 10:
        subtotal += 5.50
    elif subtotal <= 30:
        subtotal += 4.35
    elif subtotal > 30:
        subtotal += 3.85

more_one_year_discount = 0.9625

if contract_term == 'two':
    subtotal *= more_one_year_discount

total = subtotal *  number_mounts

print(f'{total:.2f} lv.')




'''
one
Small
yes
10
'''
