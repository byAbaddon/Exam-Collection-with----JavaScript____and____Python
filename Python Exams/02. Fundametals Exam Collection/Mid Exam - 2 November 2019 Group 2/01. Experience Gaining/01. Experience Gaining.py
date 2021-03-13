import sys
needed_experience = int(input())
battles = int(input())
experience = 0

for i in range(1, battles + 1):
    current = int(input())
    if i % 3 == 0:
        experience += current * 1.15
    elif i % 5 == 0:
        experience += current * 0.90    
    else:
        experience += current

    if experience >= needed_experience:
        print(f'Player successfully collected his needed experience for {i} battles.')
        sys.exit()


print(f'Player was not able to collect the needed experience, {abs(needed_experience - experience):.2f} more needed.')            