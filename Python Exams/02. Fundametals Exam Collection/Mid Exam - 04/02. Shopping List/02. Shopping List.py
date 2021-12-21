products_list = input().split('!')
while True:
    com, product, *args = input().split()

    if com == 'Go':
        print(*products_list, sep=', ')
        break

    if com == 'Urgent' and product not in products_list:
        products_list.insert(0, product)
    if com == 'Unnecessary' and product in products_list:
        products_list.remove(product)
    if com == 'Correct' and product in products_list:
        index = products_list.index(product)
        old_product = products_list.pop(index)
        products_list.insert(index, args[0])
    if com == 'Rearrange' and product in products_list:
        index = products_list.index(product)
        products_list.append(products_list.pop(index))

'''
Tomatoes!Potatoes!Bread
Unnecessary Milk
Urgent Tomatoes
Go Shopping!

-----------------output:
Tomatoes, Potatoes, Bread
'''
