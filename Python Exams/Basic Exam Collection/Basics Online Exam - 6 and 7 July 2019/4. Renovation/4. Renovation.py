from math import ceil

height, width, percent = [int(input()) for _ in range(3)]
wall = ceil((height * width * 4) * ((100 - percent) / 100))

while True:
    try:
      paint = int(input())
    except:
      print(f'{wall} quadratic m left.')
      break

    wall -= paint

    if wall <= 0:
      if wall >= 0:
        print(f'All walls are painted! Great job, Pesho!')
      else:
        print(f'All walls are painted and you have {abs(wall)} l paint left!')
      break






# '''
# 3
# 5
# 10
# 2
# 3
# 4
# Tired!
# '''
