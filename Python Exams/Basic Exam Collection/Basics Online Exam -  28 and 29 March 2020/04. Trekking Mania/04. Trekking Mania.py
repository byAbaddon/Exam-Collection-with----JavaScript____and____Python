groups = int(input())
all_people = 0
g1, g2, g3, g4, g5 = 0, 0, 0, 0, 0

for _ in range(groups):
   people = int(input())
   all_people += people 

   if people <= 5:
      g1 += people
   elif people >= 6 and people <= 12:
      g2 += people
   elif people >= 13 and people <= 25:
      g3 += people
   elif people >= 26 and people <= 40:
      g4 += people
   else:
      g5 += people


print(f'{(g1 / all_people * 100):.2f}%')
print(f'{(g2 / all_people * 100):.2f}%')
print(f'{(g3 / all_people * 100):.2f}%')
print(f'{(g4 / all_people * 100):.2f}%')
print(f'{(g5 / all_people * 100):.2f}%')


