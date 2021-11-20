
def countTrees(matrix, vx=3, vy=1):

    x, y = (0, 0)
    width = len(matrix[0])
    height = len(matrix)
    print(width, height)
    count = 0

    while y < height:
        if matrix[y][x] == "#":
            count += 1
        
        x = (x + vx) % width
        y += vy
        print((x,y))
    
    return count




inp = []
with open('input.txt') as f:
    for line in f.readlines():
        inp.append(line.rstrip())

one = countTrees(inp, 1, 1)
two = countTrees(inp, 3, 1)
three = countTrees(inp, 5, 1)
four = countTrees(inp, 7, 1)
five = countTrees(inp, 1, 2)

print(one * two * three * four * five)

