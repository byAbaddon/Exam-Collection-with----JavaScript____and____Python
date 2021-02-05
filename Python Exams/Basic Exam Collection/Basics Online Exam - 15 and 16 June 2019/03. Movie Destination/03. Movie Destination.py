budget = float(input())
destination = input()
season = input()
day_count = int(input())

country_dict = {
    'Dubai' : {'Winter' : 45000, 'Summer' : 40000,},
    'Sofia' : {'Winter' : 17000, 'Summer' : 12500,},
    'London' : {'Winter': 24000, 'Summer' : 20250,},
}

total_sum = country_dict[destination][season] * day_count

if destination == 'Dubai':
    total_sum *= 0.70
elif destination == 'Sofia':
    total_sum *= 1.25

if budget < total_sum:
    print(f'The director needs {total_sum - budget:.2f} leva more!')
else:
    print(f'The budget for the movie is enough! We have {budget - total_sum:.2f} leva left!')


'''
1000000
Dubai
Summer
5
'''
