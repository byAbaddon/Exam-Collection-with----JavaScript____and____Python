picture_time, count_chapters, cad_time = [int(input()) for _ in range(3)]

preparation = picture_time * 0.15
operators_time = count_chapters * cad_time
needed_time = preparation + operators_time
total = round(abs(picture_time - needed_time))

if needed_time <= picture_time:
    print(f'You managed to finish the movie on time! You have {total} minutes left!')
else:
    print(f'Time is up! To complete the movie you need {total} minutes.')

'''
135
5
20
'''

