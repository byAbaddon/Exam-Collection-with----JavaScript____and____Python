tournaments_number = int(input())
start_points = int(input())

points_dict = {'W' : 2000, 'F' : 1200, 'SF': 720}
final_points = start_points
win = 0

for _ in range(tournaments_number):
    current_tournament = input()
    final_points += points_dict[current_tournament]
    if current_tournament == 'W': win +=1


average_points = (final_points - start_points) // tournaments_number
win_percent = win / tournaments_number * 100

print(f'Final points: {final_points}\nAverage points: {average_points}\n{win_percent:.2f}%')



'''
5
1400
F
SF
W
W
SF
'''
