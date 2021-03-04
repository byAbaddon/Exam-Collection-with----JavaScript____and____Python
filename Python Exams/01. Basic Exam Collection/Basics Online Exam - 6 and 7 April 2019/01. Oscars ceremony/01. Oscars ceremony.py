rent = int(input())

statuettes = rent * 0.70
catering = statuettes / 100 * 85
sound = catering / 2
all_sum = rent + statuettes + catering + sound

print(f'{all_sum:.2f}')
