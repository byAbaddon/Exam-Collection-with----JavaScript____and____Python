def get_magic_triangle(n):
    triangle = [[1], [1, 1]]
    for i in range(2, n):
        row = []
        for j in range(i + 1):
            if j == 0:
                row.append(triangle[i - 1][0])
            elif j == i:
                row.append(triangle[i - 1][-1])
            else:
                row.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
        triangle.append(row)

    return triangle

# get_magic_triangle(5)
