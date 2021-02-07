from math import ceil
people, tax, sunbed, umbrella = [float(input()) for _ in range(4)]

enter_tax = people * tax 
percent_sunbed = ceil(people * 0.75) * sunbed
percent_umbrella =  ceil(people * 0.50) * umbrella
total_price = enter_tax + percent_sunbed + percent_umbrella

print(f'{total_price:.2f} lv.')


'''
21
5.5
4.4
6.2
'''
