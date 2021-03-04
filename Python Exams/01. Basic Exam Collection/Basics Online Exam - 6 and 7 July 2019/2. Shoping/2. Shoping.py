budget = float(input())
card_numbers = int(input())
cpu_numbers = int(input())
ram_numbers = int(input())
card = card_numbers * 250
cpu =  cpu_numbers * (card * 0.35)
ram =  ram_numbers * (card * 0.10)

all_sum = card + cpu + ram

if card_numbers > cpu_numbers:
  all_sum -= (all_sum * 0.15)

total = abs(budget - all_sum)

if all_sum <= budget:
    print(f'You have {total:.2f} leva left!')
else:
 print(f'Not enough money! You need {total:.2f} leva more!')




'''
900
2
1
3
'''

