all_eggs = int(input())
total_bought_eggs = 0

while True:
    command = input()
    if command == 'Close':
        print(f'Store is closed!\n{total_bought_eggs} eggs sold.')
        break

    eggs_count = int(input())

    if command == 'Buy':
        if all_eggs >= eggs_count:
            all_eggs -= eggs_count
            total_bought_eggs += eggs_count
        else:
            print(f'Not enough eggs in store!\nYou can buy only {all_eggs}.')
            break
    elif command == 'Fill':
        all_eggs += eggs_count


