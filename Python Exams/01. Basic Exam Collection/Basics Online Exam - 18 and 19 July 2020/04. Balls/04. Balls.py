balls_points = {'red': 5, 'orange': 10, 'yellow': 15, 'white': 20, 'black': 0}
balls_quantities = {'Total points': 0, 'red': 0, 'orange': 0, 'yellow': 0, 'white': 0, 'Other colors picked': 0,'Divides from black balls': 0}

for _ in range(int(input())):
    ball = input()

    if ball == 'black':
        balls_quantities['Divides from black balls'] += 1
        balls_quantities['Total points'] /= 2
        continue
    if ball in balls_points:
        balls_quantities[ball] += 1
        balls_quantities['Total points'] += balls_points[ball]
    else:
        balls_quantities['Other colors picked'] += 1

for k, v in balls_quantities.items():
    print(f'{k}: {int(v)}' if not k.find('T') else f'{k.title()} balls: {v}' if len(k) < 10 else f'{k}: {v}')


# ------------------------------------------------------(2)---------------------------------------------    
    
    
from math import floor

balls_count = int(input())
points = 0
balls_obj = {'red': 5, 'orange': 10, 'yellow': 15, 'white': 20, 'black': 0}
statistics_obj = {
    'red': 0,
    'orange': 0,
    'yellow': 0,
    'white': 0,
    'Other colors picked': 0,
    'Divides from black balls': 0}

for _ in range(balls_count):
    current_ball = input()
    if current_ball not in balls_obj:
        statistics_obj['Other colors picked'] += 1
        continue
    if current_ball == 'black':
        statistics_obj['Divides from black balls'] += 1
        points = floor(points / 2)
        continue
    statistics_obj[current_ball] += 1
    points += balls_obj[current_ball]


print('Total points:', points)

for k, v in statistics_obj.items():
    if len(k) < 10:
        print(f'Points from {k} balls: {v}')
    else:
        print(f'{k}: {v}')

'''
3
white
black
pink
'''
