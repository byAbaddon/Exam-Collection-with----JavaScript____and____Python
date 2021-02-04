target = int(input())
current = target - 30
count, fall = 0, 0

while current <= target:
      count += 1
      jump = int(input())

      if current < jump:
        current += 5
        fall = 0
      else:
         fall += 1

      if fall > 2:
            print(f'Tihomir failed at {current}cm after {count} jumps.')
            exit()

print(f'Tihomir succeeded, he jumped over {target}cm after {count} jumps.')


'''
231
205
212
213
228
229
230
235
'''
