while True:
    needed_incomes = float(input())
    collected_amount = 0

    for _ in range(100):
        cocktail_name = input()
        if cocktail_name == 'Party!':
            print(f'We need {needed_incomes - collected_amount:.2f} leva more.')
            break
        cocktail_count = int(input())

        incomes_sum = len(cocktail_name) * cocktail_count
        if incomes_sum % 10 & 1:
            incomes_sum *= 0.75

        collected_amount += incomes_sum
        if collected_amount >= needed_incomes:
            print(f'Target acquired.')
            break

    print(f'Club income - {collected_amount:.2f} leva.')
    break



'''
500
Bellini
6
Bamboo
7
Party!
'''
