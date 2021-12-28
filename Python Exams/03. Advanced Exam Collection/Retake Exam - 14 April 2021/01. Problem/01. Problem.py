pizzas_list = list(filter(lambda x: 0 < x < 11,  map(int, input().split(', '))))
employees_list = list(map(int, input().split(', ')))
pizzas_made = 0

while pizzas_list and employees_list:
    pizzas = pizzas_list.pop(0)
    employees = employees_list.pop()

    if employees < pizzas:
        pizzas_list.insert(0, pizzas - employees)
        pizzas -= pizzas - employees

    pizzas_made += pizzas


if pizzas_list:
    print('Not all orders are completed.')
    print('Orders left:', ', '.join([str(x) for x in pizzas_list]))
else:
    print('All orders are successfully completed!')
    print(f'Total pizzas made: {pizzas_made}')
    if employees_list:
        print(f'Employees:', ', '.join([str(x) for x in employees_list]))

'''
11, 6, 8, 1
3, 1, 9, 10, 5, 9, 1
--------------------------
All orders are successfully completed!
Total pizzas made: 15
Employees: 3, 1
'''
