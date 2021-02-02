# --------------------- WTF Fucking Judge ???---------------83pts
'''
movie_list = [input() for _ in range(int(input()) * 2)]
movie_dict = {movie_list[i]: float(movie_list[i + 1]) for i in range(0, len(movie_list), 2)}
sorted_movie_tuple = sorted(movie_dict.items(), key = lambda x: (-x[1], x[0]))
s_m_t = sorted_movie_tuple
print(f'{s_m_t[0][0]} is with highest rating: {s_m_t[0][1]:.1f}')
print(f'{s_m_t[::-1][0][0]} is with lowest rating: {s_m_t[::-1][0][1]:.1f}')

average = sum([val[1] for val in s_m_t])
print(f'Average rating: {average / len(s_m_t):.1f}')
'''

#------------------------------(2)----------------------------100pts
movie_list = [input() for _ in range(int(input()) * 2)]
movie_dict = {movie_list[i]: float(movie_list[i + 1]) for i in range(0, len(movie_list), 2)}
big_rtg, small_rtg, average = float('-inf'), float('inf'), 0
big_rtg_movie, small_rtg_movie = '', ''

for movie_name, rating in movie_dict.items():
    average += rating
    if big_rtg < rating:
        big_rtg = rating
        big_rtg_movie = movie_name
    if small_rtg > rating:
        small_rtg = rating
        small_rtg_movie = movie_name

print(f'{big_rtg_movie} is with highest rating: {big_rtg}')
print(f'{small_rtg_movie} is with lowest rating: {small_rtg}')
print(f'Average rating: {(average / len(movie_dict)):.1f}')



'''
5
A Star is Born
7.8
Creed 2
7.3
Mary Poppins
7.2
Vice
7.2
Captain Marvel
7.1
'''
