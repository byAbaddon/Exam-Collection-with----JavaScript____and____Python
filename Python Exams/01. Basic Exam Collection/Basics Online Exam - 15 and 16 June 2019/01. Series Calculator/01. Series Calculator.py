serial_name = input()
seasons_count = int(input())
chapters_count = int(input())
time_for_serial = float(input())

ad_time = time_for_serial * 0.20
all_chapter_time = time_for_serial + ad_time
bonus_time = seasons_count * 10
total_time =  all_chapter_time * chapters_count  * seasons_count+ bonus_time

print(f'Total time needed to watch the {serial_name} series is {total_time:.0f} minutes.')


'''
Game of Thrones
7
10
50
'''
