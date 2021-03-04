control_min, control_sec, m_long ,sec_per_meters = [float(input()) for _ in range(4)]

control_time = control_min * 60 + control_sec
time_decrease = m_long / 120
total_decrease_time = time_decrease * 2.5
player_time = m_long / 100 * sec_per_meters - total_decrease_time

if player_time <= control_time:
    print(f'Marin Bangiev won an Olympic quota!\nHis time is {player_time:.3f}.')
else:
    print(f'No, Marin failed! He was {player_time - control_time:.3f} second slower.')





'''
1
20
1546
12
'''
