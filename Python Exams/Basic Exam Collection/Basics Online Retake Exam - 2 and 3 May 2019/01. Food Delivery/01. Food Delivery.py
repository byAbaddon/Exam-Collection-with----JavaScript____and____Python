chicken_numbers, fish_numbers, vegetable_numbers = [int(input()) for x in range(3)]
chicken_numbers *= 10.35
fish_numbers *= 12.40
vegetable_numbers *= 8.15
dessert = 1.20
delivery = 2.50

subtotal = chicken_numbers + fish_numbers + vegetable_numbers
total = subtotal * dessert + delivery

print(f'Total: {total:.2f}')


'''
2
4
3
'''
