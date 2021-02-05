artist_name = input()
artist_points = float(input())
jury_list = int(input())

needed_point = 1250.5

for _ in range(jury_list):
    jury_name = input()
    jury_point = float(input())

    artist_points += len(jury_name) * jury_point / 2

    if artist_points > needed_point:
        print(f'Congratulations, {artist_name} got a nominee for leading role with {artist_points:.1f}!')
        exit()

print(f'Sorry, {artist_name} you need {needed_point - artist_points:.1f} more!')
