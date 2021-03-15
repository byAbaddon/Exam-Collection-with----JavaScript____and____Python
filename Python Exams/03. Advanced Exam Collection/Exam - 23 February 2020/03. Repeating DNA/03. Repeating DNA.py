def get_repeating_DNA(test):
    result = []
    for i in range(len(test)):
        if test[i: i + 10] in test[i+1:]:
            if len(test[i: i+10]) == 10 and test[i: i+10] not in result:
                result.append(test[i: i+10])

    return result
