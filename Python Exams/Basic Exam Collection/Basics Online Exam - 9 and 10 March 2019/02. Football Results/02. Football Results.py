win, loss, equal = 0, 0, 0

for _ in range(3):
    host, guest = input().split(':')
    if host > guest:
        win += 1
    elif host < guest:
        loss += 1
    else:
        equal += 1

print(f'Team won {win} games.\nTeam lost {loss} games.\nDrawn games: {equal}')
