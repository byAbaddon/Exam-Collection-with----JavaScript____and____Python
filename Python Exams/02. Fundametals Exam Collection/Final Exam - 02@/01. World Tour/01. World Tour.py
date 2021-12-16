travels = input()

while True:
    command, *args = input().split(':')
    if command == 'Travel':
        print('Ready for world tour! Planned stops:', travels)
        break

    if command == 'Add Stop':
        index, string = args
        if 0 <= int(index) < len(travels):
            travels = travels[0:int(index)] + string + travels[int(index):]
    if command == 'Remove Stop':
        start, end = map(int, args)
        if start >= 0 and end < len(travels):
            travels = travels[0:start] + travels[end + 1:]
    if command == 'Switch':
        old, new = args
        travels = travels.replace(old, new)
    print(travels)

'''
Hawai::Cyprys-Greece
Add Stop:7:Rome
Remove Stop:11:16
Switch:Hawai:Bulgaria

---------------output:
Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece
'''