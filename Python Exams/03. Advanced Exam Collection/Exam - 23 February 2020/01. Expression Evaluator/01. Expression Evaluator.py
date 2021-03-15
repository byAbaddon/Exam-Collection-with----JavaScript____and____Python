import math

calc_list = [x for x in input().split()]

def calculator(arr, operator):
    for i in range(len(arr) + len(arr) // 2):
       if i & 1:
            arr.insert(i, operator)
            
    result = eval(' '.join(arr))
    if type(result) == float:
        result = math.floor(result) 
    return str(result)
            

while len(calc_list) != 1:
    current_list = []
    for n in calc_list:
        if n in ['-', '+', '*', '/'] :
            operator_index = calc_list.index(n)
            operator = calc_list.pop(operator_index)
            current_list = calc_list[0 : operator_index ]
            calc_list = calc_list[len(current_list) : ]
            calc_list.insert(0, calculator(current_list, operator))
            break


print(*calc_list)        


            