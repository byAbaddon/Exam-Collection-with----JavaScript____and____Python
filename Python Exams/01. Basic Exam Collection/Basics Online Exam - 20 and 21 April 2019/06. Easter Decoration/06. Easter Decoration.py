number_clients = int(input())
loop = number_clients
price_dict = { 'basket': 1.50, 'wreath' : 3.80, 'chocolate bunny' : 7}
total_sum = 0

while loop:
    loop-= 1
    current_sum = 0
    items_count = 0

    while True:
        current_items = input()
        if current_items == 'Finish': break
        items_count += 1
        current_sum += price_dict[current_items]


    if not items_count & 1:
        current_sum *= 0.80
    total_sum += current_sum
    print(f'You purchased {items_count} items for {current_sum:.2f} leva.')


print(f'Average bill per client is: {total_sum / number_clients:.2f} leva.')


'''
1
basket
wreath
chocolate bunny
wreath
basket
chocolate bunny
Finish
'''
