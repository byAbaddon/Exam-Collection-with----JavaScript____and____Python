numbers_list = list(map(int, input().split()))

while True:
    token = input()

    if token == 'end':
        print(', '.join(str(x) for x in numbers_list))
        break
    if token == 'decrease':
        numbers_list = [x - 1 for x in numbers_list]
        continue

    command, first_index, second_index = [int(x) if x.isdigit() else x for x in token.split()]
    element_one = numbers_list[first_index]
    element_two = numbers_list[second_index]

    if command == 'swap':
        numbers_list[first_index] = element_two
        numbers_list[second_index] = element_one
    elif command == 'multiply':
        numbers_list[first_index] = element_one * element_two

'''
23 -2 321 87 42 90 -123
swap 1 3
swap 3 6
swap 1 0
multiply 1 2
multiply 2 1
decrease
end

------------------output:
86, 7382, 2369942, -124, 41, 89, -3

'''