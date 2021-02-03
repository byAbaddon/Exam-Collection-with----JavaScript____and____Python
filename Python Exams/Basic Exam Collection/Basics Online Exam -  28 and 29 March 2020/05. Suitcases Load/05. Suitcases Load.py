contents = float(input())
goods = 0
count_luggage = 0

while True:
   luggage = input()
   
   if luggage == 'End' or contents < goods:
     if luggage == 'End':
       print('Congratulations! All suitcases are loaded!')
     else:
       print('No more space!')
       count_luggage -= 1  
     break
   else:
     if count_luggage % 3 == 0:
        goods += float(luggage) * 1.10
     else:
        goods += float(luggage)
  
   count_luggage += 1

print(f'Statistic: {count_luggage} suitcases loaded.')