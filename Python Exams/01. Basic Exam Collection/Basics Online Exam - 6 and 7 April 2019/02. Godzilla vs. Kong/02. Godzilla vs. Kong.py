budget, statist, clothes = [float(input()) for _ in range(3)]

decor_sum = budget * 0.10
if statist > 150:
    clothes_sum = int(statist) * clothes  * 0.90
else:
    clothes_sum = int(statist) * clothes

subtotal_sum = decor_sum + clothes_sum

if budget >= subtotal_sum:
    print(f'Action!\nWingard starts filming with {budget - subtotal_sum:.2f} leva left.')
else:
    print(f'Not enough money!\nWingard needs {abs(budget - subtotal_sum):.2f} leva more.')


'''
9587.88
222
55.68
'''

