from re import findall, split
from math import floor

text = input()
regex = r'#[A-Za-z\s]+\#\d{2}\/\d{2}\/\d{2}\#\d+\#|\|[A-Za-z\s]+\|\d{2}\/\d{2}\/\d{2}\|\d+\|'

matching = findall(regex, text)
all_calories = 0
result = ''

for match in matching:
    item, date, calories = split(r'#|\|', match)[1:-1]
    all_calories += int(calories)
    result += f'Item: {item}, Best before: {date}, Nutrition: {calories}\n'

print(f'You have food to last you for: {floor(all_calories / 2000)} days!')
print(result)

'''
#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|

----------------output:
You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500
'''