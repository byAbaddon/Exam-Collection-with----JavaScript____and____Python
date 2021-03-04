days = int(input())
hours = int(input())
current_tax = 0
total_tax = 0

for day in range(1, days + 1):
    for hour in range(1, hours + 1):
        if not day & 1 and hour & 1:
            current_tax += 2.50
            total_tax += 2.50
        elif day & 1 and not hour & 1:
            current_tax += 1.25
            total_tax += 1.25
        else:
            current_tax += 1
            total_tax += 1

    print(f'Day: {day} - {current_tax:.2f} leva')
    current_tax = 0


print(f'Total: {total_tax:.2f} leva')

