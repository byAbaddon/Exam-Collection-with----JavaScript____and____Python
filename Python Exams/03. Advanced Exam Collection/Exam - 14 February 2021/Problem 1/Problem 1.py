# WTF this not working ???
# firework_list, explosive_list = [list(filter(lambda x: x > 0, map(int, input().split(', ')))) for _ in range(2)]
firework_list, explosive_list = [list(map(int, input().split(', '))) for _ in range(2)]
palm = willow = crossette = 0

while firework_list and explosive_list:
    is_visited = False
    effect = firework_list[0]
    power = explosive_list[-1]

    if effect <= 0:
        firework_list.pop(0)
        continue
    if power <= 0:
        explosive_list.pop()
        continue

    firework_sum = power + effect

    if firework_sum % 3 == 0 and firework_sum % 5 != 0:
        palm += 1
    elif firework_sum % 5 == 0 and firework_sum % 3 != 0:
        willow += 1
    elif firework_sum % 3 == 0 and firework_sum % 5 == 0:
        crossette += 1
    else:
        firework_list.pop(0)
        firework_list.append(effect - 1)
        is_visited = True

    if not is_visited:
        firework_list.pop(0)
        explosive_list.pop()

    if palm + willow + crossette >= 9:
        break


if palm + willow + crossette >= 9:
    print("Congrats! You made the perfect firework show!")
else:
    print("Sorry. You can't make the perfect firework show.")

if firework_list:
    print(f"Firework Effects left: {', '.join([str(x) for x in firework_list])}")

if explosive_list:
    print(f"Explosive Power left: {', '.join([str(x) for x in explosive_list])}")

print(f"Palm Fireworks: {palm}\nWillow Fireworks: {willow}\nCrossette Fireworks: {crossette}")


'''
5, 6, 4, 16, 11, 5, 30, 2, 3, 27
1, 13, 5, 3, -7, 32, 19, 3, 5, 7, 22
-------------------------
Congrats! You made the perfect firework show!
Palm Fireworks: 4
Willow Fireworks: 3
Crossette Fireworks: 3
'''
