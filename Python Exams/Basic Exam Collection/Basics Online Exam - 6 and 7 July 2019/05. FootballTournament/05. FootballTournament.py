team = input()
games_played = int(input())

result_list = [input() for _ in range(games_played)]
win = result_list.count('W')
equal = result_list.count('D')
lose = result_list.count('L')

total_points = win * 3 + equal * 1 + lose * 0

if games_played >= 1:
    print(f"{team} has won {total_points} points during this season.\nTotal stats:")
    print(f"## W: {win}\n## D: {equal}\n## L: {lose}")
    print(f"Win rate: {(win / games_played) * 100 :.2f}%")
else:
    print(f"{team} hasn't played any games during this season.")
    


'''
Liverpool
10
W
D
D
W
L
W
D
D
W
W
'''    
