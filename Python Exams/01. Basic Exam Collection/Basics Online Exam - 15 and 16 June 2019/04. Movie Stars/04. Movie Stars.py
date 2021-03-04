all_budget = float(input())

while True:
    try:
        action_name = input()
        if action_name == 'ACTION':
            break

        if len(action_name) > 15:
           all_budget *= 0.80
           continue
        else:
            honorarium = float(input())
            all_budget -= honorarium

        if all_budget <= 0:
            break
    except:
        break


if all_budget >= 0:
    print(f'We are left with {all_budget:.2f} leva.')
else:
    print(f'We need {abs(all_budget):.2f} leva for our actors.')
