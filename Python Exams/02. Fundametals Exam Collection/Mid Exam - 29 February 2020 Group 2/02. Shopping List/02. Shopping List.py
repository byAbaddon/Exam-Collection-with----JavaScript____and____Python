product_list = input().split('!')

while True:
    token = input().split()
    if len(token) == 2:
        command, product = token[0], token[1]
    else:
        command, old_item, new_item = token[0], token[1], token[2]

    if command == 'Go':
        print(', '.join(product_list))
        break

    if command == 'Urgent' and product not in product_list:
        product_list.insert(0, product)
    elif command == 'Unnecessary' and product in product_list:
        product_list.remove(product)
    elif command == 'Correct' and old_item in product_list:
        index = product_list.index(old_item) 
        product_list.insert(index, new_item)
        product_list.remove(old_item)
    elif command == 'Rearrange' and product in product_list:
        product_list.remove(product)
        product_list.append(product)
