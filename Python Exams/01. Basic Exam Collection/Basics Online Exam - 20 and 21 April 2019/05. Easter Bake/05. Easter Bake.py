from math import ceil

cake_numbers = int(input())
flour_packet = 950
sugar_paket = 750
needed_sugar_pkg = 0
needed_flour_pkg = 0
max_flour = []
max_sugar = []

for _ in range(cake_numbers):
    max_sugar.append(int(input()))
    max_flour.append(int(input()))


needed_flour_pkg = ceil(sum(max_flour) / sugar_paket)
needed_sugar_pkg = ceil(sum(max_sugar) / flour_packet)

print(f'Sugar: {needed_sugar_pkg}')
print(f'Flour: {needed_flour_pkg}')
print(f'Max used flour is {max(max_flour)} grams, max used sugar is {max(max_sugar)} grams.')



'''
3
400
350
250
300
450
380
'''
