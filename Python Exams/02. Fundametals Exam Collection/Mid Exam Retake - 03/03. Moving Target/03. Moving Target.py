class MovingTarget:
    def __init__(self, target_list):
        self.target_list = target_list

    def find_index(self, index):
        if 0 <= index < len(self.target_list):
            return True
        else:
            return False

    def shoot(self, index, power):
        if self.find_index(index):
            self.target_list[index] -= power
            if self.target_list[index] <= 0:
                self.target_list.pop(index)

    def add(self, index, value):
        if self.find_index(index):
            self.target_list.insert(index, value)
        else:
            print('Invalid placement!')

    def strike(self, index, radius):
        if self.find_index(index):
            if index + radius < len(self.target_list) and index - radius >= 0:
                part_one = self.target_list[0: index - radius]
                part_two = self.target_list[index + radius + 1:]
                self.target_list = part_one + part_two
            else:
                print('Strike missed!')

    def __repr__(self):
        return '|'.join(map(str, self.target_list))


target = MovingTarget(list(map(int, input().split())))
while True:
    try:
        method, i, val = input().lower().split()
        invoke_method = f'target.{method}{int(i), int(val)}'
        exec(invoke_method)
    except:
        print(target)
        break


'''
52 74 23 44 96 110
Shoot 5 10
Shoot 1 80
Strike 2 1
Add 22 3
End
-------------------
output: 
Invalid placement!
52|100

'''