move_name = input()
 
count_standard_tickets = 0
count_students_tickets = 0
count_kids_tickets = 0
 
while move_name != 'Finish':
    free_space = int(input())
    filled_space = 0
    while filled_space < free_space:
        ticket = input()
 
        if ticket == 'standard':
            filled_space += 1
            count_standard_tickets += 1
        elif ticket == 'student':
            filled_space += 1
            count_students_tickets += 1
        elif ticket == 'kid':
            filled_space += 1
            count_kids_tickets += 1
        elif ticket == 'End':
            break
 
    percent_full = filled_space * 100 / free_space
    print(f'{move_name} - {percent_full:.2f}% full.')
    move_name = input()
 
total_tickets = count_students_tickets + count_standard_tickets + count_kids_tickets
percent_students = count_students_tickets * 100 / total_tickets
percent_standard = count_standard_tickets * 100 / total_tickets
percent_kids = count_kids_tickets * 100 / total_tickets
 
print(f'Total tickets: {total_tickets}')
print(f'{percent_students:.2f}% student tickets.')
print(f'{percent_standard:.2f}% standard tickets.')
print(f'{percent_kids:.2f}% kids tickets.')
