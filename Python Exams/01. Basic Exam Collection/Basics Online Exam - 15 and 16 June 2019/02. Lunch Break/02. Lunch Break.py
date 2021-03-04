from math import ceil

serial_name = input()
chapter_time = int(input())
rest_time = int(input())

lunch_time = rest_time * 1/8
other_rest_time = rest_time * 1/4
time_left = rest_time - lunch_time - other_rest_time
total_time = chapter_time - time_left

if time_left >= chapter_time:
    print(f'You have enough time to watch {serial_name} and left with {ceil(abs(total_time))} minutes free time.')
else:
    print(f'You don\'t have enough time to watch {serial_name}, you need {ceil(total_time)} more minutes.')
