# Day 1
from itertools import combinations

# Part 1
def part1(arr):
	opposites = set(2020 - x for x in arr)

	for i in arr:
		if i in opposites:
			x = i

	return (2020 - x) * x


# Part 1
def part2(arr):
	twoSumOpposites = {}
	for x, y in combinations(arr, 2):
		twoSumOpposites[2020 - x - y] = (x, y)

	for i in arr:
		if i in twoSumOpposites:
			z = i

	x, y = twoSumOpposites[z]

	return z * x * y


inp = []
with open('input.txt') as f:
	toInt = lambda x: int(x)
	inp = list(map(toInt, f.read().split()))

print(part1(inp))
print(part2(inp))