# day 2

def isValidPasswordPart1(line):
	condition, letter, password = line
	min, max = condition.split('-')
	letter = letter[0]

	count = 0
	for c in password:
		if c == letter:
			count += 1;
	

	print(condition, letter, password, count)
	if count < int(min) or count > int(max):
		return False
	else:
		return True

def isValidPasswordPart2(line):
	condition, letter, password = line
	min, max = map(lambda x: int(x), condition.split('-'))
	
	letter = letter[0]

	count = 0
	if (password[min-1] == letter) != (password[max-1] == letter):
		return True
	else:
		return False

inp = []
with open('input.txt') as f:
	for line in f.readlines():
		inp.append(line.split())

validPasswordCount = 0
for line in inp:
	if isValidPasswordPart2(line):
		validPasswordCount += 1

print(validPasswordCount)

