total_sum = 0
tax = 0.20

while True:
    current = input()
    if current == 'regular' or current == 'special':
        break
    elif float(current) < 0:
        print('Invalid price!')
    else:
        total_sum += float(current)

if total_sum <= 0:
    print('Invalid order!')
    exit()

print('Congratulations you\'ve just bought a new computer!')
print(f'Price without taxes: {total_sum:.2f}$')
print(f'Taxes: {total_sum * tax:.2f}$')
print('-' * 11)

total_sum += float(total_sum * tax)
if current == 'special':
    total_sum *= 0.90

print(f'Total price: {total_sum:.2f}$')



