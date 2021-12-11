days, daily_plunder, expected_plunder = [int(input()) for _ in range(3)]
total_plunder = 0
for day in range(1, days + 1):
    total_plunder += daily_plunder
    if day % 3 == 0:
        total_plunder += daily_plunder * 0.5
    if day % 5 == 0:
        total_plunder *= 0.7

if total_plunder >= expected_plunder:
    print(f'Ahoy! {total_plunder:.2f} plunder gained.')
else:
    print(f'Collected only {total_plunder * 100 / expected_plunder:.2f}% of the plunder.')



