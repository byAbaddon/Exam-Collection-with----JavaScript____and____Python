def numbers_searching(*args):
    dup_list = list(sorted(set([x for x in args if args.count(x) > 1])))
    miss_num_list = [i for i in range(min(args), max(args)) if i not in args][0]
    return [miss_num_list] + [dup_list]


'''
print(numbers_searching(1, 2, 4, 2, 5, 4))
print(numbers_searching(5, 5, 9, 10, 7, 8, 7, 9))
print(numbers_searching(50, 50, 47, 47, 48, 45, 49, 44, 47, 45, 44, 44, 48, 44, 48))
[3, [2, 4]]
'''
