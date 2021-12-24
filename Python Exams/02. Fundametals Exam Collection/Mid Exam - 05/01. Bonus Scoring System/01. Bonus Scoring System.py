lectors, bonus, *students_list = [int(input()) for _ in range(int(input()) + 2)]
max_points = attended = 0

for student in students_list:
    points = round(student / lectors * (5 + bonus))
    if points > max_points:
        max_points = points
        attended = student

print(f'Max Bonus: {max_points}.\nThe student has attended {attended} lectures.')


'''
5
25
30
12
19
24
16
20
---------output:
Max Bonus: 34.
The student has attended 24 lectures.
'''