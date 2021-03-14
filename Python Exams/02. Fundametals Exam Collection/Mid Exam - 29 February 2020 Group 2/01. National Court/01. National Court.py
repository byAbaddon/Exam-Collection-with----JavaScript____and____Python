all_employees = sum([int(input()) for _ in range(3)])
clients = int(input())
hour = 0

while clients > 0:
    hour += 1
    clients -= all_employees
    
    if hour % 4 == 0:
        hour += 1


print(f'Time needed: {hour}h.')

 


