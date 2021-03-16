def list_manipulator(arr, command, position, *args):
    if not args:
        if command == 'remove':
            if position == 'beginning':
                return arr[1:]
            else:
                return arr[0:-1]   
    elif command == 'add':
            if position == 'beginning':
                arr = list(args) + arr
                return arr
            else: # add end
                arr = arr + list(args)
                return arr
    else: #command == remove
        if position == 'beginning':
            return arr[args[0]:]
        else: # remove end
            return arr[0:-args[0]]
         

