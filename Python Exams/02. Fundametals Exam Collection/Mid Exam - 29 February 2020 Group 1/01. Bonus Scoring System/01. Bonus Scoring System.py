number_of_students = int(input()) 
course_lectures = int(input())     
current_bonus = int(input())
grades_dict = {'bonus': 0 , 'visited' : 0}

while True:
    try:
        student_attendances = int(input()) 
        total_bonus = round(student_attendances / course_lectures * (5 + current_bonus))
        if total_bonus >  grades_dict['bonus']:
             grades_dict['bonus'] = total_bonus
             grades_dict['visited'] = student_attendances
    except:
        print(f"Max Bonus: {grades_dict['bonus']}.")
        print(f"The student has attended {grades_dict['visited']} lectures.")
        break   