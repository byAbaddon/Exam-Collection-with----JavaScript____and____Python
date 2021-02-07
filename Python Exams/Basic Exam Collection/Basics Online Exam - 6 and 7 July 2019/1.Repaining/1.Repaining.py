nylon, pain, thinner, hours =  [int(input()) for _ in range(4)]

kg_nylon = (nylon + 2) * 1.50
klPain = (pain * 110 / 100) * 14.50
kg_thinner = thinner * 5.00
subtotal = kg_nylon + klPain + kg_thinner + 0.40
total = subtotal * 0.30 * hours + subtotal

print(f'Total expenses: {total:.2f} lv.')


'''
10
11
4
8
'''
